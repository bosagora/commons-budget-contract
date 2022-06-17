//SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "./IVoteraVote.sol";

// E000 : authorization error
// E001 : invalid input error
// E002 : state error
// E003 : Too Late
// E004 : Too Early
// E005 : invalid signature

contract VoteraVote is IVoteraVote {
    struct VoteInfo {
        uint64  startVote;
        uint64  endVote;
        uint64  openVote;
        string  info;
    }

    struct Candidate {
        uint64  id;
        uint64  voteCount;
        string  name;
    }

    struct ValidatorMap {
        address[] keys;
        mapping(address => address) values;
    }

    struct Ballot {
        address key;
        uint64 choice;
        uint64 nonce;
        bytes commitment;
    }
    struct VoterMap {
        address[] keys;
        mapping(address => Ballot) values;
    }

    address public chair;
    bytes32 public proposalID;
    address private budget;

    // Vote Information
    VoteInfo public voteInfo;
    Candidate[] public candidates;

    ValidatorMap private validators;
    VoterMap private voters;
    uint public revealCount;
    bool private votePublished;

    event VoteResultPublished();

    constructor() {
        chair = address(1);
    }

    function init(address _chair, bytes32 _proposalID, address _budget) external override {
        require(chair == address(0) && _chair != address(0), "E001");

        chair = _chair;
        proposalID = _proposalID;
        budget = _budget;
    }

    function changeChair(address _newChair) external override {
        require(chair == msg.sender, "E000");
        require(_newChair != address(0), "E001");
        chair = _newChair;
    }

    function getChair() external override view returns (address) {
        return chair;
    }

    function setupVoteInfo(uint64 _startVote, uint64 _endVote, uint64 _openVote, string memory _info) public {
        require(msg.sender == chair, "E000");
        require(block.timestamp < _startVote, "E001");
        require(0 < _startVote && _startVote < _endVote && _endVote < _openVote, "E001");
        require(voteInfo.startVote == 0 && voteInfo.openVote == 0, "E002");

        voteInfo = VoteInfo({
            startVote: _startVote,
            endVote: _endVote,
            openVote: _openVote,
            info: _info
        });

        candidates.push(Candidate({ id: 0, voteCount: 0, name: "BLANK" }));
        candidates.push(Candidate({ id: 1, voteCount: 0, name: "YES" }));
        candidates.push(Candidate({ id: 2, voteCount: 0, name: "NO" }));
    }

    function changeVoteInfo(uint64 _startVote, uint64 _endVote, uint64 _openVote) public {
        require(msg.sender == chair, "E000");
        require(0 < _startVote && _startVote < _endVote && _endVote < _openVote, "E001");
        require(block.timestamp < voteInfo.startVote && block.timestamp < _startVote, "E003");

        voteInfo.startVote = _startVote;
        voteInfo.endVote = _endVote;
        voteInfo.openVote = _openVote;
    }

    function addValidators(address[] memory _validators) public {
        require(msg.sender == chair, "E000");
        require(block.timestamp < voteInfo.startVote, "E003");

        for (uint i = 0; i < _validators.length; i++) {
            address _validator = _validators[i];
            if (!validatorContains(_validator)) {
                validators.values[_validator] = _validator;
                validators.keys.push(_validator);
            }
        }
    }

    function validatorContains(address key) private view returns (bool) {
        return validators.values[key] == key;
    }

    function votersSize() private view returns (uint) {
        return voters.keys.length;
    }

    function votersContains(address key) private view returns (bool) {
        return voters.values[key].key == key;
    }

    function getValidatorCount() external override view returns (uint) {
        return validators.keys.length;
    }

    function getValidatorAt(uint _index) public view returns (address) {
        return validators.keys[_index];
    }

    function verifySubmit(address _vote, address _sender, bytes memory _commitment, bytes memory _signature) private view {
        bytes32 dataHash = keccak256(abi.encode(_vote, _sender, _commitment));
        uint8 v;
        bytes32 r;
        bytes32 s;
        (v, r, s) = signatureSplit(_signature, 0);
        address recover = ecrecover(dataHash, v, r, s);
        require(recover == chair, "E001"); // confirm via voteraServer
    }

    function submitBallot(address _vote, bytes memory _commitment, bytes memory _signature) public {
        require(validatorContains(msg.sender), "E000");
        require(_vote == address(this), "E001");
        require(block.timestamp >= voteInfo.startVote, "E004");
        require(block.timestamp < voteInfo.endVote, "E003");
        verifySubmit(_vote, msg.sender, _commitment, _signature);

        if (votersContains(msg.sender)) {
            voters.values[msg.sender].commitment = _commitment;
        } else {
            voters.values[msg.sender] = Ballot({
                key: msg.sender,
                commitment: _commitment,
                choice: 0,
                nonce: 0
            });
            voters.keys.push(msg.sender);
        }
    }

    function myBallot() public view returns (Ballot memory) {
        return voters.values[msg.sender];
    }

    function ballotCount() public view returns (uint) {
        return votersSize();
    }

    function getBallotAtIndex(uint _index) public view returns (Ballot memory) {
        require(_index < votersSize(), "E001");
        require(block.timestamp >= voteInfo.endVote, "E004");
        return voters.values[voters.keys[_index]];
    }

    function signatureSplit(bytes memory signatures, uint pos) private pure returns (uint8 v, bytes32 r, bytes32 s) {
        // The signature format is a compact form of:
        //   {bytes32 r}{bytes32 s}{uint8 v}
        // Compact means, uint8 is not padded to 32 bytes.
        // solhint-disable-next-line no-inline-assembly
        assembly {
            let signaturePos := mul(0x41, pos)
            r := mload(add(signatures, add(signaturePos, 0x20)))
            s := mload(add(signatures, add(signaturePos, 0x40)))
            // Here we are loading the last 32 bytes, including 31 bytes
            // of 's'. There is no 'mload8' to do this.
            //
            // 'byte' is not working due to the Solidity parser, so lets
            // use the second best option, 'and'
            v := and(mload(add(signatures, add(signaturePos, 0x41))), 0xff)
        }
    }

    function verifyReveal(address _vote, address _sender, uint64 _choice, uint64 _nonce, bytes memory _commitment) private pure {
        bytes32 dataHash = keccak256(abi.encode(_vote, _sender, _choice, _nonce));
        uint8 v;
        bytes32 r;
        bytes32 s;
        (v, r, s) = signatureSplit(_commitment, 0);
        address recover = ecrecover(dataHash, v, r, s);
        require(recover == _sender, "E001");
    }

    function revealBallot(address[] memory _keys, uint64[] memory _choices, uint64[] memory _nonces) public {
        require(chair == msg.sender, "E000");
        require(block.timestamp >= voteInfo.openVote, "E004");
        require(_keys.length == _choices.length && _keys.length == _nonces.length, "E001");
        require(!votePublished, "E002");

        address vote = address(this);

        for (uint i = 0; i < _keys.length; i++) {
            if (votersContains(_keys[i])) {
                require(_nonces[i] != 0, "E001");

                verifyReveal(vote, _keys[i], _choices[i], _nonces[i], voters.values[_keys[i]].commitment);

                if (voters.values[_keys[i]].nonce == 0) {
                    revealCount++;
                }
                voters.values[_keys[i]].choice = _choices[i];
                voters.values[_keys[i]].nonce = _nonces[i];
            }
        }
    }

    function registerResult() public {
        require(chair == msg.sender, "E000");
        require(block.timestamp >= voteInfo.openVote, "E004");
        require(!votePublished && revealCount == votersSize(), "E002");

        for (uint i = 0; i < candidates.length; i++) {
            candidates[i].voteCount = 0;
        }

        for (uint i = 0; i < revealCount; i++) {
            uint64 choice = voters.values[voters.keys[i]].choice;
            if (choice < candidates.length) {
                candidates[choice].voteCount++;
            }
        }

        votePublished = true;
        emit VoteResultPublished();
    }

    function getVoteCounts() external override view returns (uint64[] memory) {
        require(block.timestamp >= voteInfo.openVote, "E004");
        require(votePublished, "E002");
        uint64[] memory voteCounts = new uint64[](candidates.length);
        for (uint i = 0; i < candidates.length; i++) {
            voteCounts[i] = candidates[i].voteCount;
        }
        return voteCounts;
    }
}
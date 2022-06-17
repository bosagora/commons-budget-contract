// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import { Clones } from "@openzeppelin/contracts/proxy/Clones.sol";
import "./IVoteraVote.sol";
import "./ICommonsBudget.sol";

import "hardhat/console.sol";

contract CommonsBudget is Ownable, ICommonsBudget {

    address public voteChair;
    address public libraryAddress;

    function changeVoteParam(address _voteChair, address _libraryAddress) public onlyOwner {
        require(_voteChair != address(0) && _libraryAddress != address(0), "InvalidInput");
        voteChair = _voteChair;
        libraryAddress = _libraryAddress;
    }

    function createVote(address _chair, bytes32 _proposalID, address _budget) internal returns (address) {
        require(libraryAddress != address(0) && _chair != address(0), "NotReady");
        address clone = Clones.clone(libraryAddress);
        IVoteraVote(clone).init(_chair, _proposalID, _budget);
        return clone;
    }

    enum ProposalType { SYSTEM, FUND }
    enum RejectedCause { NONE, SCORE, FEE }

    struct ProposalFeeData {
        address[] payers;
        mapping(address => uint) values;
    }

    struct ProposalData {
        ProposalType proposalType;

        string      title;
        uint64      start;
        uint64      end;
        bytes32     docHash;
        uint        fundAmount;
        address     proposer;

        bool        rejected; // FUND type: assess rejected
        RejectedCause cause;

        uint        validatorSize;
        uint64[]    voteCounts;

        address     voteAddress;
    }

    mapping(bytes32 => ProposalFeeData) private feeMaps;
    mapping(bytes32 => ProposalData) private proposalMaps;

    function proposalExists(bytes32 _proposalID) private view returns (bool) {
        return proposalMaps[_proposalID].voteAddress != address(0);
    }

    function proposalNotStarted(bytes32 _proposalID) private view returns (bool) {
        return block.timestamp < proposalMaps[_proposalID].start;
    }

    function payProposalFee(bytes32 _proposalID) public payable {
        require(msg.value > 0, "InvalidFee");
        require(proposalExists(_proposalID), "NotFoundProposal");

        if (feeMaps[_proposalID].values[msg.sender] > 0) {
            feeMaps[_proposalID].values[msg.sender] += msg.value;
        } else {
            feeMaps[_proposalID].values[msg.sender] = msg.value;
            feeMaps[_proposalID].payers.push(msg.sender);
        }
    }

    function makeSystemProposalData(bytes32 _proposalID, string memory _title, uint64 _start, uint64 _end, bytes32 _docHash) public payable {
        require(msg.value > 0, "InvalidFee");
        require(!proposalExists(_proposalID), "DuplicatedProposal");
        require(block.timestamp < _start && _start < _end, "InvalidInput");
        // TODO: add policy for system proposal fee

        proposalMaps[_proposalID].proposalType = ProposalType.SYSTEM;
        proposalMaps[_proposalID].title = _title;
        proposalMaps[_proposalID].start = _start;
        proposalMaps[_proposalID].end = _end;
        proposalMaps[_proposalID].docHash = _docHash;
        proposalMaps[_proposalID].voteAddress = createVote(voteChair, _proposalID, address(this));

        feeMaps[_proposalID].values[msg.sender] = msg.value;
        feeMaps[_proposalID].payers.push(msg.sender);
    }

    function makeFundProposalData(bytes32 _proposalID, string memory _title, uint64 _start, uint64 _end, bytes32 _docHash, uint _amount, address _proposer) public payable {
        require(msg.value > 0 && msg.sender == _proposer, "InvalidFee"); // TODO: check proposer policy
        require(!proposalExists(_proposalID), "DuplicatedProposal");
        require(block.timestamp < _start && _start < _end, "InvalidInput");
        // TODO: add policy for fund proposal fee

        proposalMaps[_proposalID].proposalType = ProposalType.FUND;
        proposalMaps[_proposalID].title = _title;
        proposalMaps[_proposalID].start = _start;
        proposalMaps[_proposalID].end = _end;
        proposalMaps[_proposalID].docHash = _docHash;
        proposalMaps[_proposalID].fundAmount = _amount;
        proposalMaps[_proposalID].proposer = _proposer;
        proposalMaps[_proposalID].voteAddress = createVote(voteChair, _proposalID, address(this));

        feeMaps[_proposalID].values[msg.sender] = msg.value;
        feeMaps[_proposalID].payers.push(msg.sender);
    }

    function checkProposalForPublishing(bytes32 _proposalID) private view {
        require(block.timestamp >= proposalMaps[_proposalID].end, "NotEnd");
        require(!proposalMaps[_proposalID].rejected, "RejectedProposal");
    }

    // Called by VoteraVote chair
    function votePublished(bytes32 proposalID, uint validatorSize, uint64[] calldata voteCounts) external override {
        address voteAddress = proposalMaps[proposalID].voteAddress;
        require(voteAddress != address(0), "NotFoundProposal");
        checkProposalForPublishing(proposalID);

        IVoteraVote voteraVote = IVoteraVote(voteAddress);

        // call in contract does not work. 
        // for the time being, votera server will call this function directly
        // confirm input parameter (vote result is already registered in votera vote)
        require(msg.sender == voteraVote.getChair(), "NotAuthorized");
        require(validatorSize == voteraVote.getValidatorCount(), "InvalidInput");

        uint64[] memory _voteCounts = voteraVote.getVoteCounts();
        require(voteCounts.length == _voteCounts.length, "InvalidInput");
        for (uint i = 0; i < voteCounts.length; i++) {
            require(voteCounts[i] == _voteCounts[i], "InvalidInput");
        }

        proposalMaps[proposalID].validatorSize = validatorSize;
        proposalMaps[proposalID].voteCounts = voteCounts;
    }

    function checkProposalForAssessReject(bytes32 _proposalID) private view {
        require(proposalMaps[_proposalID].proposalType == ProposalType.FUND, "NotFundProposal");
        require(block.timestamp < proposalMaps[_proposalID].start, "Delayed");
        require(!proposalMaps[_proposalID].rejected, "RejectedProposal");
    }

    // Called by VoteraVote chair
    function rejectAssess(bytes32 _proposalID) public {
        address voteAddress = proposalMaps[_proposalID].voteAddress;
        require(voteAddress != address(0), "NotFoundProposal");
        checkProposalForAssessReject(_proposalID);

        IVoteraVote voteraVote = IVoteraVote(voteAddress);
        require(msg.sender == voteraVote.getChair(), "NotAuthorized");

        proposalMaps[_proposalID].rejected = true;
        proposalMaps[_proposalID].cause = RejectedCause.SCORE;
    }

    function checkProposalForStart(bytes32 _proposalID) private view {
        require(block.timestamp >= proposalMaps[_proposalID].start, "TooEarly");
        require(!proposalMaps[_proposalID].rejected, "RejectedProposal");
    }

    // Called by VoteraVote chair
    function voteStarted(bytes32 proposalID) external override {
        address voteAddress = proposalMaps[proposalID].voteAddress;
        require(voteAddress != address(0), "NotFoundProposal");
        checkProposalForStart(proposalID);

        IVoteraVote voteraVote = IVoteraVote(voteAddress);
        require(msg.sender == voteraVote.getChair(), "NotAuthorized");

        if (proposalMaps[proposalID].proposalType == ProposalType.FUND) {
            // TODO: policy for proposal fee
            uint required = proposalMaps[proposalID].fundAmount / 10;
            uint values = getProposalValues(proposalID);
            if (values < required) {
                // TODO: example of reject
                // proposalMaps[proposalID].rejected = true;
                proposalMaps[proposalID].cause = RejectedCause.FEE;
                // revert("NotEnoughFee");
            }
        }
    }

    function getProposalValues(bytes32 _proposalID) public view returns (uint) {
        uint value = 0;
        for (uint i = 0; i < feeMaps[_proposalID].payers.length; i++) {
            address _payer = feeMaps[_proposalID].payers[i];
            value += feeMaps[_proposalID].values[_payer];
        }
        return value;
    }

    function getProposalVoteAddress(bytes32 _proposalID) public view returns (address) {
        return proposalMaps[_proposalID].voteAddress;
    }

    function getProposalData(bytes32 _proposalID) public view returns (ProposalData memory) {
        return proposalMaps[_proposalID];
    }

    event Received(address, uint);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}

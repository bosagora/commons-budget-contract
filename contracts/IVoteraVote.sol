// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

interface IVoteraVote {
    function init(address _chair, bytes32 _proposalID, address _budget) external;
    function changeChair(address _newChair) external;
    function getChair() external view returns (address);
    function getValidatorCount() external view returns (uint);
    function getVoteCounts() external view returns (uint64[] memory);
}

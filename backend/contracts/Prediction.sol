// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Prediction {
    uint256 amountA;
    uint256 amountB;
    bool teamA;
    constructor() {
        amountA = 100;
        amountB = 100;
    }

    function getA() external view returns (uint256) {
        return amountA;
    }

    function getB() external view returns (uint256) {
        return amountB;
    }

    function viewVolume() external view returns (uint256, uint256) {
        return (amountA, amountB);
    }

    function placeA(uint256 amount) external {
        amountA += amount;
    }
    function placeB(uint256 amount) external {
        amountB += amount;
    }
}
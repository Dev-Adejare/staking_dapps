// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StakeToken is ERC20 {

    constructor(uint initialSupply) ERC20("StakeToken" , "STK") {
         _mint(msg.sender, initialSupply* 10**18);
    
    }
}
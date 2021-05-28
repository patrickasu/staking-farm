pragma solidity ^0.5.0;

import "./DaiToken.sol";
import "./DappToken.sol";

contract TokenFarm {
    string public name = "Dapp Token Farm";
    address public owner;
    DappToken public dappToken;
    DaiToken public daiToken;

    address[] public stakers;
    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(DappToken _dappToken, DaiToken _daiToken) public {
        dappToken = _dappToken;
        daiToken = _daiToken;
        owner = msg.sender;
    }

    // Stake tokens
    function stakeTokens(uint _amount) public {
        //require amount greater than zero
        require(_amount > 0, "Amount cannot be 0");
        // transfer Dai tokens to the smart contract for staking
        daiToken.transferFrom(msg.sender, address(this), _amount);

        //update staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        //add users to stakers array only if they haven't stake already
        if(!hasStaked[msg.sender]){
            stakers.push(msg.sender);
        }

        //update staking status
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    function unstakeTokens() public {
        //fetch staking balance
        uint balance = stakingBalance[msg.sender];
        //require amount greater than zero
        require(balance > 0, "Staking balance cannot be 0");
        //transfer token to the user
        daiToken.transfer(msg.sender, balance);
        //reset the staking balance
        stakingBalance[msg.sender] = 0;
        //update staking status
        isStaking[msg.sender] = false;
    }

    function issueTokens() public {
        //only owner can call this function
        require(msg.sender == owner, "caller must be the owner");
        //issue tokens to all stakers
        for(uint i=0; i<stakers.length; i++) {
            address recipient = stakers[i];
            uint balance = stakingBalance[recipient];
            if(balance > 0) {
                dappToken.transfer(recipient, balance);
            }
        }
    }
}
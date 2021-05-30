// const DappToken = artifacts.require('DappToken');
// const DaiToken = artifacts.require('DaiToken');
// const TokenFarm = artifacts.require('TokenFarm');

// module.exports = async function(deployer, network, accounts) {
//     await deployer.deploy(DaiToken)
//     const daiToken = await DaiToken.deployed()

//     await deployer.deploy(DappToken)
//     const dappToken = await DappToken.deployed()

// //   deployer.deploy(TokenFarm);
//     await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
//     const tokenFarm = await TokenFarm.deployed()

//     await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')
//     await daiToken.transfer(accounts[1], '1000000000000000000000000')
// };

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const DappToken = artifacts.require('DappToken');
const DaiToken = artifacts.require('DaiToken');
const TokenFarm = artifacts.require('TokenFarm'); 

const provider = new HDWalletProvider(
  'hero panda nasty pitch top whisper brief pet jazz arrest trouble know',
  'https://rinkeby.infura.io/v3/48e4d12d7c3849678302f4ed7193a5a5'
);
const web3 = new Web3(provider);

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(DaiToken)
    const daiToken = await DaiToken.deployed()

    await deployer.deploy(DappToken)
    const dappToken = await DappToken.deployed()

//   deployer.deploy(TokenFarm);
    await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
    const tokenFarm = await TokenFarm.deployed()

    await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')
    await daiToken.transfer(accounts[1], '1000000000000000000000000')
};

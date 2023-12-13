require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@typechain/hardhat");
require("hardhat-gas-reporter");

module.exports = {
  // Your other config properties...
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 100
      }
    }
  },
  networks: {
    hardhat: {
      gas: 30000000
    },
    sepolia: {
      url: ''
    }
  },
  etherscan: {
    apiKey: ''
  }
}
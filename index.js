const hre = require('hardhat')
const { AUCTION_CONTRACT_ABI } = require('./abis')

const verifyContract = (
  address,
  contractArgs = [],
  contractABI
) => {
  console.debug(`Attempting to verify contract at address: ${address}`)
  hre.run('verify:verify', {
    address: address,
    contract: {
      abi: contractABI
    },
    constructorArguments: contractArgs
  }).catch(console.error)
}

//auction

verifyContract('0x486367d6d11538B5f4E6fc57538F2E6F074bFcc5', AUCTION_CONTRACT_ABI)


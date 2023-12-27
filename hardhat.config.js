require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    bsc: {
      url: "https://bsc-dataseed.bnbchain.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    sepolia: {
      chainId: 11155111,
      url: process.env.INFURA_SEPOLIA_ENDPOINT_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    mumbai: {
      chainid: 80001,
      url: process.env.INFURA_MUMBAI_ENDPOINT_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    polygon: {
      chainId: 137,
      url: process.env.INFURA_POLYGON_ENDPOINT_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
};

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

module.exports = {
  solidity: "0.8.24",
  networks: {
    alfajores: {
      url: process.env.CELO_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
}

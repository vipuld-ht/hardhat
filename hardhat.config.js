  require("@nomicfoundation/hardhat-toolbox");
  require('@openzeppelin/hardhat-upgrades');
  require("dotenv").config();
  // require('@openzeppelin/hardhat-upgrades');
  const INFURA_API_KEY = process.env.INFURA_API_KEY;
  const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

  module.exports = {
    solidity: "0.8.28",
    networks: {
      hardhat: {
        accounts: [
          {
            privateKey: SEPOLIA_PRIVATE_KEY,
            balance: "1000000000000000000" // 1 ETH
          }
        ]
      },
      sepolia: {
        url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
        accounts: [SEPOLIA_PRIVATE_KEY],
      },
    },
  };

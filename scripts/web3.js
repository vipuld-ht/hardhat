// import Web3 from 'web3';
// import { abi, address } from '../Contract-JSON/AssetRegistry.json' assert { type: "json" };
// import dotenv from 'dotenv';


const Web3 = require('web3');
const { abi, address } = require('../Contract-JSON/AssetRegistry.json');

require('dotenv').config();


// dotenv.config();

// Create a new instance of Web3
const web3=new Web3(`https://sepolia.infura.io/v3/62fd981f0d5a469ba641a06e35d44f0b`));
const contract = new web3.eth.Contract(abi, address);
// Register asset on the blockchain
const registerAssetOnBlockchain = async (ipfsHash, timestamp) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  try {
    await contract.methods.registerAsset(ipfsHash, timestamp).send({ from: account });
    console.log("Asset registered on the blockchain!");
  } catch (error) {
    console.error("Error registering asset on blockchain:", error);
  }
};

// Verify asset on the blockchain
const verifyAsset = async (ipfsHash) => {
  try {
    const exists = await contract.methods.verifyAsset(ipfsHash).call();
    return exists;
  } catch (error) {
    console.error("Error verifying asset:", error);
    return false;
  }
};

// Example usage (from the backend handler)
app.post("/register-asset", async (req, res) => {
  const { ipfsHash, timestamp } = req.body;

  try {
    await registerAssetOnBlockchain(ipfsHash, timestamp);
    res.status(200).send("Asset registered on the blockchain.");
  } catch (error) {
    res.status(500).send("Error registering asset.");
  }
});


// Example usage (from the backend handler)
app.get("/verify-asset", async (req, res) => {
  const { ipfsHash, timestamp } = req.body;

  try {
    await registerAssetOnBlockchain(ipfsHash, timestamp);
    res.status(200).send("Asset registered on the blockchain.");
  } catch (error) {
    res.status(500).send("Error registering asset.");
  }
});

// API to verify an asset
app.get("/verify-asset", async (req, res) => {
  const { ipfsHash } = req.query;

  if (!ipfsHash) {
    return res.status(400).send("IPFS hash is required.");
  }

  try {
    const exists = await verifyAsset(ipfsHash);
    if (exists) {
      res.status(200).send({ message: "Asset exists on the blockchain." });
    } else {
      res.status(404).send({ message: "Asset does not exist on the blockchain." });
    }
  } catch (error) {
    console.error("Error verifying asset:", error);
    res.status(500).send("Error verifying asset.");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
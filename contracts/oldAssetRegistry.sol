// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AssetRegistry {
    struct Asset {
        string ipfsHash;
        uint timestamp;
    }

    mapping(string => Asset) public assets;

    event AssetRegistered(string ipfsHash, uint timestamp);

    // Function to register asset on the blockchain
    function registerAsset(string memory ipfsHash, uint timestamp) public {
        require(bytes(ipfsHash).length > 0, "IPFS hash is required");

        assets[ipfsHash] = Asset({
            ipfsHash: ipfsHash,
            timestamp: timestamp
        });

        emit AssetRegistered(ipfsHash, timestamp);
    }

    // Function to verify if an asset exists
    function verifyAsset(string memory ipfsHash) public view returns (bool) {
        return bytes(assets[ipfsHash].ipfsHash).length > 0;
    }
}

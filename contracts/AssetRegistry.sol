// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
contract AssetRegistry  {
    struct Asset {
        string ipfsHash;
        uint timestamp;
    }

    mapping(string => Asset) public assets;

    event AssetRegistered(string ipfsHash, uint timestamp);

    function registerAsset(string memory ipfsHash) public {
        require(bytes(ipfsHash).length > 0, "IPFS hash is required");
        // require(assets[ipfsHash].timestamp == 0, "Asset already registered");

        uint currentTimestamp = block.timestamp;
        assets[ipfsHash] = Asset({
            ipfsHash: ipfsHash,
            timestamp: currentTimestamp
        });

        emit AssetRegistered(ipfsHash, currentTimestamp);
    }


    // Function to verify if an asset exists
    function verifyAsset(string memory ipfsHash) public view returns (bool) {
        return bytes(assets[ipfsHash].ipfsHash).length > 0;
    }
}

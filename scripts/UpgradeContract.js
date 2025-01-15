const { ethers, upgrades } = require('hardhat');

async function verifyProxy(proxyAddress) {
    try {
        const adminAddress = await upgrades.admin.getInstance();
        console.log(`Admin Address: ${adminAddress}`);

        const proxyImplementation = await upgrades.erc1967.getImplementationAddress(proxyAddress);
        console.log(`Implementation Address: ${proxyImplementation}`);
    } catch (error) {
        console.error("Failed to verify proxy:", error.message);
    }
}

async function UpgradeContract() {
    const proxyAddress = '0x3F56305a1ED68aD5061A5d56b04624698D573080';

    const [deployer] = await ethers.getSigners();
    console.log("Upgrading contracts with the account:", deployer.address);

    // New implementation contract
    const AssetRegistryV2 = await ethers.getContractFactory("AssetRegistry");

    // Perform the upgrade
    const upgraded = await upgrades.upgradeProxy(proxyAddress, AssetRegistryV2);
    console.log("AssetRegistry upgraded. New implementation at:", upgraded.address);
}

UpgradeContract()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error upgrading contract:", error);
        process.exit(1);
    });
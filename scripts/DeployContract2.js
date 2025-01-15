const { ethers, upgrades } = require("hardhat");

async function main() {
    const AssetRegistry = await ethers.getContractFactory("AssetRegistry");
    const proxy = await upgrades.deployProxy(AssetRegistry, [], {
        initializer: "initialize",
    });
    console.log("Proxy deployed to:", proxy.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
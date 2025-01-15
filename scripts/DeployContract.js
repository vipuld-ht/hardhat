// const fs = require('fs');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const AssetRegistry = await ethers.getContractFactory("AssetRegistry");

    const assetRegistry = await AssetRegistry.deploy();

    console.log("AssetRegistry contract deployed to:", assetRegistry);
    // fs.writeFileSync("./deployedContractAddress.json", JSON.stringify({ assetRegistry }));

}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
  
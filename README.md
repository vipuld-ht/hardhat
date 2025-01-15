# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# Important command

```shell
 npx hardhat compile
npx hardhat deploy --network sepolia
npx hardhat run scripts/DeployContract.js --network sepolia//

npx hardhat run  scripts/UpgradeContract.js --network sepolia
```
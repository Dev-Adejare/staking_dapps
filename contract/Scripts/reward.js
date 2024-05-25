const hre = require("hardhat");

async function main() {
    const RewardToken = await hre.ethers.getContractFactory("RewardToken");
    const reward = await RewardToken.deploy(1000000);

    console.log("RewardToken contract deploy to", reward.target);

}
main().then(() => process.exit())
.catch((error) => {
    console.error(error);
    process.exit(1);
});


// 0x3eDC3FF668D048EfB06E28B132bCEB88049a7C59  
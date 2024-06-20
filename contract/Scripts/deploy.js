const hre = require("hardhat");
async function main() {
  const StakeToken = await hre.ethers.getContractFactory("StakeToken");
  const stakeToken = await StakeToken.deploy(1000);

  console.log("StakeToken deployed to:", stakeToken.target);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});



//  0x5530F73A68e1f02BC85707d83c877273E89c7546
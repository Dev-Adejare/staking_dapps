const hre = require("hardhat");

async function main() {
    const Staking = await hre.ethers.getContractFactory("Staking");
    const staking = await Staking.deploy(' 0x5530F73A68e1f02BC85707d83c877273E89c7546', '0x3eDC3FF668D048EfB06E28B132bCEB88049a7C59', '0x4f88e5E517a5661fc17A1278E86C6fF5fF3C8070');

    console.log("stacking contract deploy to", staking.target);

}
main().then(() => process.exit())
.catch((error) => {
    console.error(error);
    process.exit(1);
});

//0x4f88e5E517a5661fc17A1278E86C6fF5fF3C8070
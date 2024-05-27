const { ethers } = require('hardhat');

async function main() {
    const user = await ethers.getSigner();
    console.log(user.address);

    let tx = await user.sendTransaction({
        from: user.address,
        to: user.adadress,
        data: "0x"
    })
    //tx.wait()
    console.log(tx.hash);
}

main()
    .then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
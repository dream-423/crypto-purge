const { ethers } = require('hardhat');

/**
 * Creating a new local Ethereum network.
 * Deploying your contract.
 * Hardhat will automatically destroy that local network by default.
 */
const main = async () => {
  // https://hardhat.org/advanced/hardhat-runtime-environment.html
  const [owner, randomWallet] = await hre.ethers.getSigners();
  const accountBalance = await owner.getBalance();
  console.log('Account balance: ', accountBalance.toString());

  const contractFactory = await ethers.getContractFactory('TheCryptoPurgePortal');
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log('Contract deployed to:', contract.address);
  console.log('Contract deployed by:', owner.address);

  let count;
  count = await contract.getTotalLikes();
  
  let txn = await contract.like();
  await txn.wait();

  count = await contract.getTotalLikes();

  // Give a like with a random wallet address
  const contractsWithRandomWallet = contract.connect(randomWallet);
  txn = await contractsWithRandomWallet.like();
  await txn.wait();
  count = await contract.getTotalLikes();

  console.log('Total likes:', count.toString());

  // Send a message with a random wallet address
  txn = await contractsWithRandomWallet.sendMessage('Hello World!');
  await txn.wait();

  console.log('All Messages:', await contract.getAllMessages());
};

const runMain = async () => {
  try {
    await main();
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
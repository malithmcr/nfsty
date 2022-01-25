require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const priveteKey = fs.readFileSync(".secret").toString();
const mainNetId=  "87aedc8e847f4e84becf763d3ffa126a";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${mainNetId}`,
      accounts: [priveteKey]
    }
  },
  solidity: "0.8.4",
};

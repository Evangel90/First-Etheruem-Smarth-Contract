/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      // mainnet: {
      //    url: "https://eth-mainnet.g.alchemy.com/v2/6KFYD5aQcoEWfnfLasCq3Ljdo5TMSJqy",
      //    accounts: [`0x${PRIVATE_KEY}`]
      // }
   },
   etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: "Y9HB91IHTEKM6EIRZ7VAPH9YCGKZ96IEZG"
   }
};

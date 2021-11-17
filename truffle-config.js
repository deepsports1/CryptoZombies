const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env.mnemonic;

module.exports = {
  networks: {
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/YOUR_TOKEN")
      },
      network_id: "1"
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/0f2fd6eb9b2e431d8842fb2641370a7f")
      },
      network_id: 4
    }
  },

  compilers: {
    solc: {
      version: "0.4.25",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};

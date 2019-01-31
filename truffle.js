const HDWalletProvider = require("truffle-hdwallet-provider-privkey")

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        const privKeys = ["8BFD3566DEE85B96ED56DFE81DD3B6E242D3FB7A2882F82DD5EF1B771598F3D2"]
        return new HDWalletProvider(privKeys, "https://ropsten.infura.io/llpS23tDULK29htdLH1L")
      },
      network_id: 3,
      gas: 4000000 //make sure this gas allocation isn't over 4M, which is the max
    }
  }
}

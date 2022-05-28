require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth pizza sniff grace infant bubble slim'; 
let testAccounts = [
"0xb452e0be0eb5866e8f403f6dde5aea8a353955289a7b1fa70b08e054c9ef5316",
"0x264df7f2c67b772ca49cc8f0313c3e12347e251f9c2f57a88ebb66371475f7b5",
"0xb203f000db6fcd23665e2c436a11f532da640978e923400ebddc22ca367c3ebb",
"0x464afc1b6cdd12ba02002bf433bdb247407584e66b2f691ce90262ebcee771b8",
"0xa80982b1e7f3663ccfc3cd78d1bd9928cc2c774188be05aeabbe4f088d4e959b",
"0x40fb146c757dc1e0bf51dad334402402fb7d4bb0eadc69865cad9d256a495f62",
"0xecb4000853580c3c2fd5a521fb34ddff95c2e3337a8ee1f8e77e8b93fbe6304a",
"0x269bb140b8120e7352cc5fae93d08f771e6cb7f8b1cb72e6af7245a42bc7571e",
"0x3e1b6465f349cc1b1807f87aba78827f02f46541137f59e311ecc7ffa5ef7708",
"0x753676d25f0a9f81b8c50f074d809f1110be062e4ea3dc4aacc5dac4703a6d46"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



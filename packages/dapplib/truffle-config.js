require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remain minor include arctic olympic ski'; 
let testAccounts = [
"0xc9cf5455c7110bceb4179576d5a480b4e4c6c731bc08f9f7bee5b89d1bdb9189",
"0x97cbbf2b905ef0df2963fed10b1ce8f8680367a33fd24c5acc07c55d41d84860",
"0x1ff10ef8c67f181c5d67a8b5fef9dee8cab460b216923a948ed91e52db6691b4",
"0x037cad19127d6b556493edf2c7657d972acaa7f5431801fec2a1a09351e4c1a3",
"0x2b23a6b049486830c7473f5c90026668e9c8296974b950ed5b14f04a9b9ee707",
"0x592f3569ba98cf98c6252953eccf6c7a6a52c7ed1d5f9ae7923b625b077180c0",
"0x108105670dc10896142ec7e24e0d6fa9b1109c6e880ef3aa9a4132dcee8c519d",
"0x2e77d0f87c6f075eeec6289afacf64666f49144fbda86349cb48e05467f589ce",
"0x01b46f7c277d5250d12544b587aea87ea2f4ec72469f0a9a0853e032effff445",
"0x3d6d1d34072e115bd47c91f9973e597eeb5274cf07e06b84ec69c23f0a77e072"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

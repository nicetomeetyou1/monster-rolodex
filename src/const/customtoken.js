import { CoinTypeLocalStorageState } from '@scallop-io/scallop-mini-wallet';
export const customCoinTypes = {
  coinTypes: {
    devnet: [],
    testnet: [],
    mainnet: [
      {
        symbol: 'sSUI',
        decimals: 9,
        coinType: '0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::MarketCoin<0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI>',
        iconUrl: 'https://app.scallop.io/assets/sSUI-df1cc6de.png', // You can provide a URL or a base64 string
        active: true, // If you want to disable a coin type, set this to false
      },
      {
        symbol: 'sUSDC',
        decimals: 6,
        coinType: '0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::reserve::MarketCoin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>',
        iconUrl: 'https://app.scallop.io/assets/sUSDC-8cd2f058.png',
        active: true,
      },
      // Add more coin types as needed...
    ]
  }
}
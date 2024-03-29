import BaseWalletHelper from '@pefish/js-coin-btc/lib/base/base_bitcoinjs_lib'

declare global {
  namespace NodeJS {
    interface Global {
      logger: any;
    }
  }
}

/**
 * 构建未签名交易没问题(version:65282)，签名有问题
 */
export default class Wallet extends BaseWalletHelper {
  decimals: number = 7;
  bitcoinLib: any

  public constructor () {
    super()
    this.bitcoinLib = require('@pefishbitcoinjs-lib')
  }
}

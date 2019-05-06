import BaseWalletHelper from 'js-btc/lib/base/base_bitcoinjs_lib';
declare global {
    namespace NodeJS {
        interface Global {
            logger: any;
        }
    }
}
/**
 * 构建未签名交易没问题，签名有问题
 */
export default class Wallet extends BaseWalletHelper {
    decimals: number;
    bitcoinLib: any;
    constructor();
}

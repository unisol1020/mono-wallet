import { HDNodeWallet } from "ethers";

export interface CryptoService {
  restoreWalletFromPhrase(mnemonicPhrase: string): HDNodeWallet;
  sendTransaction(): Promise<string>;
  calculateGasAndAmounts(): Promise<string>;
}

import "@ethersproject/shims";
import { HDNodeWallet } from "ethers";
import { CreateWallet } from "~/types/createWallet";
import { CryptoService } from "~/types/cryptoService";

const ethereum: CreateWallet & CryptoService = {
  createWallet(): HDNodeWallet {
    return HDNodeWallet.createRandom();
  },
  restoreWalletFromPhrase(): Promise<string> {
    throw new Error("Method not implemented.");
  },
  sendTransaction(): Promise<string> {
    throw new Error("Method not implemented.");
  },
  calculateGasAndAmounts(): Promise<string> {
    throw new Error("Method not implemented.");
  },
};

export default ethereum;

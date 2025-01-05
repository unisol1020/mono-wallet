import "@ethersproject/shims";
import { HDNodeWallet } from "ethers";
import { CreateWallet } from "~/types/createWallet";
import { CryptoService } from "~/types/cryptoService";
import { validateMnemonic } from "bip39";

const ethereum: CreateWallet & CryptoService = {
  createWallet(): HDNodeWallet {
    return HDNodeWallet.createRandom();
  },
  restoreWalletFromPhrase(mnemonicPhrase: string): HDNodeWallet {
    if (!mnemonicPhrase) {
      throw new Error("Mnemonic phrase cannot be empty.");
    }

    if (!validateMnemonic(mnemonicPhrase)) {
      throw new Error("Invalid mnemonic phrase ");
    }

    return HDNodeWallet.fromPhrase(mnemonicPhrase);
  },
  sendTransaction(): Promise<string> {
    throw new Error("Method not implemented.");
  },
  calculateGasAndAmounts(): Promise<string> {
    throw new Error("Method not implemented.");
  },
};

export default ethereum;

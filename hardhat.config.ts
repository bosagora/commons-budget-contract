import "@nomicfoundation/hardhat-ledger";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";

import * as dotenv from "dotenv";
import { Wallet } from "ethers";

const env_network = process.env.ENV_NETWORK || "";
if (env_network !== "") {
    const envFileName = `env/.${env_network}.env`;
    console.log(`ENV FileName ${envFileName}`);
    dotenv.config({ path: envFileName });
} else {
    const envFileName = `env/.env`;
    console.log(`ENV FileName ${envFileName}`);
    dotenv.config({ path: envFileName });
}

console.log(`env_network: ${env_network}`);
console.log(`MAINNET_URL: ${process.env.MAINNET_URL}`);
console.log(`TESTNET_URL: ${process.env.TESTNET_URL}`);

import { HardhatAccount } from "./src/HardhatAccount";

function getAccounts() {
    if (HardhatAccount.keys.length !== 0) return HardhatAccount.keys;

    const accounts: string[] = [];
    const reg_bytes64: RegExp = /^(0x)[0-9a-f]{64}$/i;
    if (
        process.env.ADMIN_KEY !== undefined &&
        process.env.ADMIN_KEY.trim() !== "" &&
        reg_bytes64.test(process.env.ADMIN_KEY)
    ) {
        accounts.push(process.env.ADMIN_KEY);
    } else {
        process.env.ADMIN_KEY = Wallet.createRandom().privateKey;
        accounts.push(process.env.ADMIN_KEY);
    }

    if (
        process.env.USER_KEY !== undefined &&
        process.env.USER_KEY.trim() !== "" &&
        reg_bytes64.test(process.env.USER_KEY)
    ) {
        accounts.push(process.env.USER_KEY);
    } else {
        process.env.USER_KEY = Wallet.createRandom().privateKey;
        accounts.push(process.env.USER_KEY);
    }

    while (accounts.length < 16) {
        accounts.push(Wallet.createRandom().privateKey);
    }

    for (const account of accounts) {
        HardhatAccount.keys.push(account);
    }

    return HardhatAccount.keys;
}

function getTestAccounts() {
    const defaultBalance = "2000000000000000000000000";
    const acc = getAccounts();
    return acc.map((m) => {
        return {
            privateKey: m,
            balance: defaultBalance,
        };
    });
}

function getLedgerAccounts() {
    if (HardhatAccount.ledgerAddress.length !== 0) return HardhatAccount.ledgerAddress;

    const addresses: string[] = [];
    const reg_bytes64: RegExp = /^(0x)[0-9a-f]{40}$/i;

    if (
        process.env.ADMIN_ADDRESS !== undefined &&
        process.env.ADMIN_ADDRESS.trim() !== "" &&
        reg_bytes64.test(process.env.ADMIN_ADDRESS)
    ) {
        addresses.push(process.env.ADMIN_ADDRESS);
    }

    if (
        process.env.USER_ADDRESS !== undefined &&
        process.env.USER_ADDRESS.trim() !== "" &&
        reg_bytes64.test(process.env.USER_ADDRESS)
    ) {
        addresses.push(process.env.USER_ADDRESS);
    }

    for (const account of addresses) {
        HardhatAccount.ledgerAddress.push(account);
    }
    return HardhatAccount.ledgerAddress;
}

const config = {
    solidity: {
        compilers: [
            {
                version: "0.8.0",
            },
        ],
        settings: {
            optimizer: {
                enabled: true,
                runs: 5000000,
            },
        },
    },
    networks: {
        hardhat: {
            accounts: getTestAccounts(),
            gas: 8000000,
            gasPrice: 8000000000,
            blockGasLimit: 8000000,
        },
        mainnet: {
            url: process.env.MAINNET_URL || "",
            chainId: 2151,
            ledgerAccounts: getLedgerAccounts(),
        },
        testnet: {
            url: process.env.TESTNET_URL || "",
            chainId: 2019,
            ledgerAccounts: getLedgerAccounts(),
        },
        standalone: {
            url: process.env.URL_STANDALONE || "",
            chainId: 24680,
            ledgerAccounts: getLedgerAccounts(),
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
};

export default config;

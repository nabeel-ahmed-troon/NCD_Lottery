const CONTRACT_NAME = process.env.CONTRACT_NAME || "lottery_project.testnet";

function getConfig(env) {
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org",
      };
    case "development":
    case "testnet":
      return {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };
    case "betanet":
      return {
        networkId: "betanet",
        nodeUrl: "https://rpc.betanet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.betanet.near.org",
        helperUrl: "https://helper.betanet.near.org",
        explorerUrl: "https://explorer.betanet.near.org",
      };
    case "local":
      return {
        networkId: "local",
        nodeUrl: "http://localhost:3030",
        keyPath: `${process.env.HOME}/.near/validator_key.json`,
        walletUrl: "http://localhost:4000/wallet",
        contractName: CONTRACT_NAME,
      };
    case "test":
    case "ci":
      return {
        networkId: "shared-test",
        nodeUrl: "https://rpc.ci-testnet.near.org",
        contractName: CONTRACT_NAME,
        masterAccount: "test.near",
      };
    case "ci-betanet":
      return {
        networkId: "shared-test-staging",
        nodeUrl: "https://rpc.ci-betanet.near.org",
        contractName: CONTRACT_NAME,
        masterAccount: "test.near",
      };
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      );
  }
}

module.exports = getConfig;

//===================================
// import { keyStores } from "near-api-js";

// /**
//  * Function that returns a NEAR connection configuration object based on the given environment.
//  *
//  * @param  {string} environment='testnet'
//  * @return {object}
//  */
// export const getConfig = (environment = "testnet") => {
//   switch (environment) {
//     case "mainnet":
//       return {
//         networkId: "mainnet",
//         keyStore: new keyStores.BrowserLocalStorageKeyStore(),
//         nodeUrl: "https://rpc.mainnet.near.org",
//         walletUrl: "https://wallet.mainnet.near.org",
//         helperUrl: "https://helper.mainnet.near.org",
//         explorerUrl: "https://explorer.mainnet.near.org",
//       };
//     case "betanet":
//       return {
//         networkId: "betanet",
//         keyStore: new keyStores.BrowserLocalStorageKeyStore(),
//         nodeUrl: "https://rpc.betanet.near.org",
//         walletUrl: "https://wallet.betanet.near.org",
//         helperUrl: "https://helper.betanet.near.org",
//       };
//     case "testnet":
//     default:
//       return {
//         networkId: "testnet",
//         keyStore: new keyStores.BrowserLocalStorageKeyStore(),
//         nodeUrl: "https://rpc.testnet.near.org",
//         walletUrl: "https://wallet.testnet.near.org",
//         helperUrl: "https://helper.testnet.near.org",
//         explorerUrl: "https://explorer.testnet.near.org",
//       };
//   }
// };

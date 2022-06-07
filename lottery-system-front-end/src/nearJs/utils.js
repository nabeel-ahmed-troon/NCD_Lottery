import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import getConfig from "./config";

const nearConfig = getConfig(process.env.NODE_ENV || "development");

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearConfig
    )
  );

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near);

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: [
        "get_ticket_id",
        "get_lottery_state",
        "get_ticket_price",
        "get_ticket_limit",
        "get_airdrop_claimers",
        "get_airdrop_count",
        "get_lottery_owner",
        "get_winner_of_lottery",
        "ticket_owner",
        "all_ticket_owner",
        "get_approved_ft",
      ],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: [
        "start_new_lottery",
        "pick_winner",
        "ft_airdrop",
        "set_airdrop_amount",
        "clear_airdrop_claimers",
        "revoke_airdrop",
        "resume_airdrop",
        "claim_reward",
      ],
    }
  );
}

export function logout() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn();
}

export async function get_lottery_ticket_price() {
  let response = await window.contract.get_ticket_price();
  return response;
}

const handleStartNewLottery = async () => {
  // Call the reset function on the counter contract
  // We have to deposit at least one yoctoNEAR (1e-24 NEAR) to be able to call change functions
  await window.start_new_lottery({
    args: {
      ticket_limit: 5,
      ticket_price: "1000000000000000000000000",
      approved_ft: "lottery_ft.testnet",
      nft_contract: "lottery_nft.testnet",
    },
    // amount: deposit.toFixed(0),
  });
};

// export async function set_greeting(message) {
//   let response = await window.contract.set_greeting({
//     args: { message: message },
//   });
//   return response;
// }

// export async function get_greeting() {
//   let greeting = await window.contract.get_greeting();
//   return greeting;
// }

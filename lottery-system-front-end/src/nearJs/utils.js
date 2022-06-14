import {
  connect,
  Contract,
  keyStores,
  utils,
  WalletConnection,
} from "near-api-js";
import * as nearAPI from "near-api-js";
import getConfig from "./config";
import { useState } from "react";

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  // keyStore: new keyStores.,
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

const nearConfig = getConfig(process.env.NODE_ENV || "development");
const GAS = "300000000000000";

export async function initContract() {
  // Initialize connection to the NEAR testnet
  // const near = await connect(
  //   Object.assign(
  //     { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
  //     nearConfig
  //   )
  // );
  const near = await connect(config);
  window.walletConnection = new WalletConnection(near);

  window.accountId = window.walletConnection.getAccountId();

  window.contract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
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
  window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
  window.walletConnection.requestSignIn();
}
//==============================================//
//            VIEW FUNCTIONS START              //
//==============================================//
export async function get_lottery_ticket_price() {
  let response = await window.contract.get_ticket_price();

  return response;
}

export async function get_ticket_limit() {
  let response = await window.contract.get_ticket_limit();

  return response;
}

export async function get_ticket_id() {
  let response = await window.contract.get_ticket_id();

  return response;
}

export async function get_lottery_state() {
  let response = await window.contract.get_lottery_state();

  return response;
}

export async function get_approved_ft() {
  let response = await window.contract.get_approved_ft();

  return response;
}

export async function get_airdrop_count() {
  let response = await window.contract.get_airdrop_count();

  return response;
}
//==============================================//
//            VIEW FUNCTIONS END              //
//==============================================//

export async function handleBuyTicket() {
  // 2350000000000000000000
  const contract = new nearAPI.Contract(
    window.walletConnection.account(), // the account object that is connecting
    "lottery_ft.testnet",
    {
      // name of contract you're connecting to
      viewMethods: ["getMessages"], // view methods do not change state but usually return a value
      changeMethods: ["ft_transfer_call"], // change methods modify state
      sender: window.walletConnection.account(), // account object to initialize and sign transactions.
    }
  );

  await contract.ft_transfer_call(
    {
      receiver_id: "lottery_project.testnet",
      amount: "1000000000000000000000000",
      msg: "helo", // argument name and value - pass empty object if no args required
    },
    "300000000000000", // attached GAS (optional)
    "1" // attached deposit in yoctoNEAR (optional)
  );
}

export async function handleStorageDeposit() {
  // 2350000000000000000000
  const contract = new nearAPI.Contract(
    window.walletConnection.account(), // the account object that is connecting
    "lottery_ft.testnet",
    {
      // name of contract you're connecting to
      viewMethods: ["getMessages"], // view methods do not change state but usually return a value
      changeMethods: ["storage_deposit"], // change methods modify state
      sender: window.walletConnection.account(), // account object to initialize and sign transactions.
    }
  );

  await contract.storage_deposit(
    {
      // argument name and value - pass empty object if no args required
    },
    "300000000000000", // attached GAS (optional)
    "2350000000000000000000" // attached deposit in yoctoNEAR (optional)
  );
}

export async function handleStartNewLottery(props) {
  const contract = new nearAPI.Contract(
    window.walletConnection.account(), // the account object that is connecting
    "lottery_project.testnet",
    {
      // name of contract you're connecting to
      viewMethods: ["getMessages"], // view methods do not change state but usually return a value
      changeMethods: ["start_new_lottery"], // change methods modify state
      sender: window.walletConnection.account(), // account object to initialize and sign transactions.
    }
  );
  await contract.start_new_lottery({
    args: {
      ticket_limit: props.ticketLimit,
      ticket_price: props.ticketPrice,
      approved_ft: props.approvedFt,
      nft_contract: props.approvedNft,
    },
  });
  // await contract.start_new_lottery({
  //   args: {
  //     ticket_limit: 5,
  //     ticket_price: "1000000000000000000000000",
  //     approved_ft: "lottery_ft.testnet",
  //     nft_contract: "lottery_nft.testnet",
  //   },
  // });
}

export async function handlePickWinner() {
  await window.contract.pick_winner({
    args: {},
  });
}

export async function handleAirdrop() {
  await window.contract.ft_airdrop({});
}

export async function handleClaimReward() {
  await window.contract.claim_reward(
    {
      _token_id: "Pakistan",
    },
    "300000000000000" // attached GAS (optional)
  );
}

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

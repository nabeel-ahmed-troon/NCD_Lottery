import "./assets/scss/screen.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect, WalletConnection, utils, Contract } from "near-api-js";
import React, { useEffect, useState } from "react";
import { getConfig } from "./nearJs/config.js";

// function App() {
export default function App() {
  // const [wallet, setWallet] = useState(null);
  // const [contract, setContract] = useState(null);
  // const [balance, setBalance] = useState("");
  // const [startLottery, setStartLottery] = useState("");
  // const [lotteryState, setLotteryState] = useState("");
  // const [deposit, setDeposit] = useState(0);
  // //connection to near blockchain
  // useEffect(() => {
  //   connect(getConfig()).then((near) => setWallet(new WalletConnection(near)));
  // }, []);

  // //initialize contract if wallet available
  // useEffect(() => {
  //   if (wallet) {
  //     setContract(
  //       new Contract(wallet.account(), "ncd_lottery.testnet", {
  //         viewMethods: [
  //           "get_ticket_id",
  //           "get_lottery_state",
  //           "get_ticket_price",
  //           "get_ticket_limit",
  //           "get_airdrop_claimers",
  //           "get_airdrop_count",
  //           "get_lottery_owner",
  //           "get_winner_of_lottery",
  //           "ticket_owner",
  //           "all_ticket_owner",
  //           "get_approved_ft",
  //         ],
  //         changeMethods: [
  //           "start_new_lottery",
  //           "pick_winner",
  //           "ft_airdrop",
  //           "set_airdrop_amount",
  //           "clear_airdrop_claimers",
  //           "revoke_airdrop",
  //           "resume_airdrop",
  //           "claim_reward",
  //         ],
  //       })
  //     );

  //     // We can get the account balance of a user through the wallet
  //     // Since this is requesting data from the blockchain, the method returns a Promise
  //     wallet
  //       .account()
  //       .getAccountBalance()
  //       .then(({ available }) => setBalance(available));
  //   }
  // }, [wallet]);

  // const isSignedIn = Boolean(wallet && wallet.isSignedIn() && contract);

  // //Login
  // const handleLogin = () => {
  //   wallet
  //     .requestSignIn
  //     // {
  //     // contractId: "ncd_lottery.testnet",
  //     // methodNames: [
  //     //   "start_new_lottery",
  //     //   "pick_winner",
  //     //   "ft_airdrop",
  //     //   "set_airdrop_amount",
  //     //   "clear_airdrop_claimers",
  //     //   "revoke_airdrop",
  //     //   "resume_airdrop",
  //     //   "claim_reward",
  //     // ],
  //     // }
  //     ();
  // };

  // //START NEW LOTTERY
  // const handleStartNewLottery = async () => {
  //   // Call the reset function on the counter contract
  //   // We have to deposit at least one yoctoNEAR (1e-24 NEAR) to be able to call change functions
  //   await contract.start_new_lottery({
  //     args: {
  //       ticket_limit: 5,
  //       ticket_price: "1000000000000000000000000",
  //       approved_ft: "lottery_ft.testnet",
  //       nft_contract: "lottery_nft.testnet",
  //     },
  //     amount: deposit.toFixed(0),
  //   });

  //   // When calling view functions, we don't need to deposit
  //   setLotteryState(await contract.get_lottery_state());
  // };

  // //PICK WINNER
  // const handlePickWinner = async () => {
  //   // Call the reset function on the counter contract
  //   // We have to deposit at least one yoctoNEAR (1e-24 NEAR) to be able to call change functions
  //   await contract.pick_winner({
  //     args: {},
  //     amount: deposit.toFixed(0),
  //   });

  //   // When calling view functions, we don't need to deposit
  //   setLotteryState(await contract.get_lottery_state());
  // };

  // //CLAIM REWARD
  // const handleClaimReward = async () => {
  //   // Call the reset function on the counter contract
  //   // We have to deposit at least one yoctoNEAR (1e-24 NEAR) to be able to call change functions
  //   await contract.pick_winner({
  //     args: {},
  //     amount: deposit.toFixed(0),
  //   });

  //   // When calling view functions, we don't need to deposit
  //   setLotteryState(await contract.get_lottery_state());
  // };

  // const [airdropCount, setAirdropCount] = useState(0);

  // // const [airdropLimit,setAirdropLimit]=useState(0);

  // const getAirdropDetails = async () => {
  //   setAirdropCount(await contract.get_airdrop_count());
  //   // setAirdropLimit(await contract.get_airdrop_limit());
  // };

  // const [price, setPrice] = useState(0);
  // const getLotteryPrice = async () => {
  //   setPrice(await contract.get_ticket_price());
  //   // setAirdropLimit(await contract.get_airdrop_limit());
  // };

  return (
    <>
      {/* <Header /> */}
      {/* <NavBar /> */}
      {/* <Router>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router> */}
      {/* <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleStartNewLottery()}>Start Lottery</button>

      <button onClick={() => getAirdropDetails()}>airdrop</button>
      <h1>Airdrop Count {airdropCount}</h1>
      <button onClick={() => getLotteryPrice()}>price</button>
      <h1>Airdrop Count {price}</h1> */}
      <Home />
    </>
  );
}

// export default App;

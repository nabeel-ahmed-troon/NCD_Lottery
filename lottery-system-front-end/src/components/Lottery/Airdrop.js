import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  handleAirdrop,
  handleStartNewLottery,
  get_airdrop_count,
  handleBuyTicket,
  handleStorageDeposit,
  handleClaimReward,
  get_lottery_winner,
} from "../../nearJs/utils";
import Statistics from "./Statistics";

const Airdrop = () => {
  const [count, setCount] = useState(0);
  const handleAirdropCount = async () => {
    let res = await get_airdrop_count();
    setCount(res);
  };

  return (
    <>
      <Statistics />
      <div className="lotterycard text-center bg-white">
        <div className="lotterycard-title">
          <h2 className="text-uppercase">Airdroping of Lottery Token</h2>
          <p>Airdrop Details are Below</p>
        </div>
        <div className="lotterycard-input"></div>
        <div className="lotterycard-descc">
          <p>
            By clicking the below button after connecting your Wallet ,You'll
            get some tokens to take participation in a lottery.
          </p>
        </div>
        <div className="lotterycard-button">
          <Button
            className="btn-primary w-100"
            variant="primary"
            type="submit"
            onClick={handleAirdrop}
          >
            Get Airdrop
          </Button>
        </div>
      </div>
    </>
  );
};

export default Airdrop;

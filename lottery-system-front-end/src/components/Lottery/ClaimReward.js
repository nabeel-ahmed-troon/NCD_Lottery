import React from "react";
import { Button } from "react-bootstrap";
import { handleClaimReward } from "../../nearJs/utils";
const ClaimReward = () => {
  return (
    <>
      <div className="lotterycard text-center bg-white">
        <div className="lotterycard-title">
          <h2 className="text-uppercase">Winner Reward Claim</h2>
          <p>Winner can claim it rewarded NFT here</p>
        </div>

        <div className="lotterycard-button">
          <Button
            className="btn-primary w-100"
            variant="primary"
            type="submit"
            onClick={handleClaimReward}
          >
            Get Reward
          </Button>
        </div>
      </div>
    </>
  );
};

export default ClaimReward;

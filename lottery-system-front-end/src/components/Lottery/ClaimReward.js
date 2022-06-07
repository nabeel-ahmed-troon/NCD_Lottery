import React from "react";
import { Form, Button } from "react-bootstrap";
// import { Formik } from "formik";
// import { validationSchema } from "../../helpers/Validations";
// import Bucks from "../../assets/images/bucks.svg";
// import Lock from "../../assets/images/lock.svg";

const ClaimReward = () => {
  return (
    <>
      <Form noValidate>
        <div className="lotterycard text-center bg-white">
          <div className="lotterycard-title">
            <h2 className="text-uppercase">Winner Reward Claim</h2>
            <p>Winner can claim it rewarded NFT here</p>
          </div>

          {/* <div className="lotterycard-descc">
            <p></p>
          </div> */}
          <div className="lotterycard-button">
            <Button
              className="btn-primary w-100"
              variant="primary"
              type="submit"
            >
              {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
              Get Reward
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default ClaimReward;

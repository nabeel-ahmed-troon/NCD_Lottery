import React from "react";
import { Form, Button } from "react-bootstrap";
import ClaimReward from "./ClaimReward";
import { handleBuyTicket } from "../../nearJs/utils";
// import { Formik } from "formik";
// import { validationSchema } from "../../helpers/Validations";
// import Bucks from "../../assets/images/bucks.svg";
// import Lock from "../../assets/images/lock.svg";

const Airdrop = () => {
  return (
    <>
      <Form noValidate>
        <div className="lotterycard text-center bg-white">
          <div className="lotterycard-title">
            <h2 className="text-uppercase">Buy Lottery Tickets</h2>
            <p>You can buy Lottery Ticket by clicking below button</p>
          </div>

          {/* <div className="lotterycard-descc">
            <p></p>
          </div> */}
          <div className="lotterycard-button">
            <Button
              className="btn-primary w-100"
              variant="primary"
              type="submit"
              onClick={handleBuyTicket}
            >
              {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
              Buy Lottery Ticket
            </Button>
          </div>
        </div>
      </Form>

      <ClaimReward />
    </>
  );
};

export default Airdrop;

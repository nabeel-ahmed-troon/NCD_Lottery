import React from "react";
import { Form, Button } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import {
  handleStartNewLottery,
  handlePickWinner,
  handleRevokeAirdrop,
  handleResumeAirdrop,
} from "../../nearJs/utils";
import StartLottery from "./startLottery";
// import { Formik } from "formik";
// import { validationSchema } from "../../helpers/Validations";
// import Bucks from "../../assets/images/bucks.svg";
// import Lock from "../../assets/images/lock.svg";

const Admin = () => {
  return (
    <>
      <StartLottery />
      <div className="lotterycard text-center bg-white">
        <div className="lotterycard-title">
          <h2 className="text-uppercase">Admin Panel</h2>
        </div>

        <div className={`lotterycard-button`}>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              className="btn-primary"
              //   className={`btn-toggle me-3`}
              variant="primary"
              spacing={2}
              type="submit"
              onClick={handlePickWinner}
            >
              {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
              Pick Winner
            </Button>
            <Button
              className="btn-primary"
              //   className={`btn-toggle me-3`}
              variant="primary"
              spacing={2}
              type="submit"
              onClick={handleResumeAirdrop}
            >
              {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
              Resume Airdrop
            </Button>
            <Button
              className="btn-primary"
              //   className={`btn-toggle me-3`}
              variant="primary"
              spacing={2}
              type="submit"
              onClick={handleRevokeAirdrop}
            >
              {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
              Revoke Airdrop
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Admin;

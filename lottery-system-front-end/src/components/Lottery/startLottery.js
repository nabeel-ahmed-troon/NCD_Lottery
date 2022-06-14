import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import { handleStartNewLottery, handlePickWinner } from "../../nearJs/utils";
import { Input } from "@mui/material";
// import { Formik } from "formik";

const StartLottery = () => {
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketLimit, setTicketLimit] = useState(0);
  const [approvedFt, setApprovedFt] = useState("");
  const [approvedNft, setApprovedNft] = useState("");

  return (
    <>
      <div className="stakecard text-center bg-white">
        <div className="stakecard-title">
          <h2 className="text-uppercase">Admin Panel</h2>
        </div>
        <form>
          <label>
            Set Ticket Price:
            <input
              type="text"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
            />
          </label>
          <label>
            Set Ticket Limit:
            <input
              type="text"
              value={ticketLimit}
              onChange={(e) => setTicketLimit(e.target.value)}
            />
          </label>
          <label>
            Set Fungible Token:
            <input
              type="text"
              value={approvedFt}
              onChange={(e) => setApprovedFt(e.target.value)}
            />
          </label>
          <label>
            Set NFT :
            <input
              type="text"
              value={approvedNft}
              onChange={(e) => setApprovedNft(e.target.value)}
            />
          </label>
        </form>

        <div className={`stakecard-button`}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              className="btn-primary "
              //   className="admin_card"
              //   className={`btn-primary w-30`}
              variant="primary"
              spacing={60}
              type="submit"
              onClick={handleStartNewLottery}
            >
              {/* <img src={Lock} className="img-fluid" alt="lock icon" /> Stake and */}
              Start Lottery
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default StartLottery;

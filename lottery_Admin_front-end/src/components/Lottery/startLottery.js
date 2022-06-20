import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import {
  handleStartNewLottery,
  handlePickWinner,
  get_lottery_state,
} from "../../nearJs/utils";
import { Input } from "@mui/material";
// import { Formik } from "formik";

const StartLottery = () => {
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketLimit, setTicketLimit] = useState("0");
  const [approvedFt, setApprovedFt] = useState("");
  const [approvedNft, setApprovedNft] = useState("");
  const [state, setState] = useState("");
  const handleStartLottery = async () => {
    try {
      await handleStartNewLottery({
        ticketLimit: +ticketLimit,
        ticketPrice: ticketPrice,
        // approvedFt: approvedFt,
        // approvedNft: approvedNft,
      });
      console.log("ticket limit", ticketLimit);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(async () => {
    let res = await get_lottery_state();
    setState(res);
  }, 1000);
  const getData = async () => {
    let res2 = await get_lottery_state();
    setState(res2);
  };

  return (
    <>
      {/* <p style="color:black">Lottery State Is : {state}</p> */}
      <div className="lotterycard text-center bg-white">
        <div className="lotterycard-title">
          <h2 className="text-uppercase">Admin Panel</h2>
        </div>
        <p>Lottery State Is : {state}</p>
        <div className="lotterycard-input-field">
          <Form.Group className="d-flex align-items-center" controlId="amount">
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter Ticket Price"
              name="amount"
              onChange={(e) => setTicketPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter Ticket Limit"
              name="amount"
              onChange={(e) => setTicketLimit(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className={`lotterycard-button`}>
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
              // type="submit"
              onClick={handleStartLottery}
            >
              Start Lottery
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default StartLottery;

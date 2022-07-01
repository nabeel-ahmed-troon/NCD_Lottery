import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import { handleStartNewLottery, handlePickWinner } from "../../nearJs/utils";
import { Input } from "@mui/material";

const StartLottery = () => {
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketLimit, setTicketLimit] = useState(0);
  const [approvedFt, setApprovedFt] = useState("");
  const [approvedNft, setApprovedNft] = useState("");

  const handleStartLottery = async () => {
    await (
      <handleStartNewLottery
        ticketLimit={ticketLimit}
        ticketPrice={ticketPrice}
        approvedFt={approvedFt}
        approvedNft={approvedNft}
      />
    );
  };

  return (
    <>
      <div className="stakecard text-center bg-white">
        <div className="stakecard-title">
          <h2 className="text-uppercase">Admin Panel</h2>
        </div>
        <div className={`stakecard-button`}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              className="btn-primary "
              variant="primary"
              spacing={60}
              type="submit"
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

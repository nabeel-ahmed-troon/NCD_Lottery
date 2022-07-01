import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Admin from "./Admin";

const Lottery = () => {
  const [airdrop, setAirdrop] = useState(true);
  const [buy_ticket, setBuyTicket] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [claim_reward, setClaimReward] = useState(false);
  const handleAirdropActive = () => {
    setBuyTicket(false);
    setAirdrop(true);
    setAdmin(false);
  };
  const handleBuyTicketActive = () => {
    setBuyTicket(true);
    setAirdrop(false);
    setAdmin(false);
    setClaimReward(false);
  };
  const handleClaimRewardActive = () => {
    setBuyTicket(false);
    setAirdrop(false);
    setAdmin(false);
    setClaimReward(true);
  };

  const handleAdminActive = () => {
    setBuyTicket(false);
    setAirdrop(false);
    setAdmin(true);
    setClaimReward(false);
  };
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <div className="toggle-btns">
          {/* <button
            type="button"
            onClick={handleAirdropActive}
            className={`btn-toggle me-3 ${buy_ticket ? "unactive" : null}`}
          >
            Airdrop
          </button>
          <button
            type="button"
            onClick={handleBuyTicketActive}
            className={`btn-toggle me-3 ${airdrop ? "unactive" : null}`}
          >
            Participate
          </button> */}
          <button
            type="button"
            onClick={handleAdminActive}
            className={`btn-toggle ${admin ? "unactive" : null}`}
          >
            Admin
          </button>
        </div>
        {admin && <Admin />}
      </Col>
    </Row>
  );
};

export default Lottery;

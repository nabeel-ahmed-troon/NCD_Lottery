import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import {
  get_approved_ft,
  get_lottery_state,
  get_ticket_id,
  get_ticket_limit,
  get_lottery_ticket_price,
} from "../../nearJs/utils";

const Statistics = () => {
  const [ft, setFt] = useState("");
  const [state, setState] = useState("");
  const [limit, setLimit] = useState("");
  const [price, setPrice] = useState("");
  const getData = async () => {
    let res1 = await get_approved_ft();
    setFt(res1);
    let res2 = await get_lottery_state();
    setState(res2);
    let res3 = await get_ticket_limit();
    setLimit(res3);
    let res4 = await get_lottery_ticket_price();
    setPrice(res4);
  };
  return (
    <>
      {/* <Form noValidate> */}
      <div className="lotterycard text-center bg-white">
        <div className="lotterycard-title">
          <h2 className="text-uppercase">Lottery Details</h2>
          <Button onClick={getData}>Refresh</Button>
        </div>
        <h4 className="text-right">Fungible Token : {ft}</h4>
        <p>Lottery State : {state}</p>
        <h4>Total Tickets : {limit}</h4>
        <h4>Ticket Price : {price}</h4>
      </div>
    </>
  );
};

export default Statistics;

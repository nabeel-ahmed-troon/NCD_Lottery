import React from "react";
import { Form, Button, Table } from "react-bootstrap";

const Airdrop = () => {
  return (
    <>
      <Form noValidate>
        <div className="lotterycard text-center bg-white">
          <div className="lotterycard-title">
            <h2 className="text-uppercase">Airdroping of Lottery Token</h2>
            <p>Airdrop Details are Below</p>
          </div>
          <div className="lotterycard-input">
            <h4>Airdrop Count : </h4>
            <h4>Airdrop Count : </h4>
            <h4>Airdrop Amount : </h4>
            {/* <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Airdrop Count</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Lottery Token Airdrop amount</td>
                  <td>5 Tokens Per Airdrop</td>
                </tr>
              </tbody>
            </Table> */}
          </div>
          {/* <div className="lotterycard-descc">
            <p>
              By clicking the below button after connecting your Wallet ,You'll
              get some tokens to take participation in a lottery.
            </p>
          </div> */}
          <div className="lotterycard-button">
            <Button
              className="btn-primary w-100"
              variant="primary"
              type="submit"
            >
              {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
              Get Airdrop
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Airdrop;

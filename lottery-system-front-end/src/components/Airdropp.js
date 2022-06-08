import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { NearContext } from "../nearJs/provider";

// const Airdrop = () => {
export default function Airdrop() {
  const { getTicketPrice } = useContext(NearContext);

  const [price, setPrice] = useState(0);
  const handlePrice = async () => {
    let res = await getTicketPrice();
    setPrice(res);
  };

  return (
    <>
      <Form>
        <div className="lotterycard text-center bg-white">
          <div className="lotterycard-title">
            <h2 className="text-uppercase">Airdroping of Lottery Token</h2>
            <p>Airdrop Details are Below</p>
          </div>
          <div className="lotterycard-input">
            {/* <h4>Airdrop Price : {airdropPrice}</h4> */}
            <button onClick={handlePrice}>get</button>
            <h4>Airdrop Price : {price}</h4>

            <h4>Airdrop Amount : </h4>
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
}

// export default Airdrop;

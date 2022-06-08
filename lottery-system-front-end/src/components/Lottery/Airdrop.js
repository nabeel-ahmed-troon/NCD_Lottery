// import React, { useState } from "react";
// import { Form, Button, Table } from "react-bootstrap";
// import { get_lottery_ticket_price, handleBuyTicket } from "../../nearJs/utils";

// // import { NearContext } from "../../nearJs/provider";
// // import { useContext } from "react";

// const Airdrop = () => {
//   // const { getTicketPrice } = useContext(NearContext);

//   const [lotteryPrice, setLotteryPrice] = useState(0);
//   const get_price = async () => {
//     let res = await get_lottery_ticket_price();
//     setLotteryPrice(res);
//     console.log(lotteryPrice);
//   };

//   // const [price, setPrice] = useState(0);
//   // const handlePrice = async () => {
//   //   let res = await getTicketPrice();
//   //   setPrice(res);
//   // };

//   return (
//     <>
//       <div className="lotterycard text-center bg-white">
//         <div className="lotterycard-title">
//           <h2 className="text-uppercase">Airdroping of Lottery Token</h2>
//           <p>Airdrop Details are Below</p>
//         </div>
//         <div className="lotterycard-input">
//           <button onClick={get_price}>get</button>
//           <h4>Airdrop Price : {lotteryPrice}</h4>

//           <h4>Airdrop Amount : </h4>
//         </div>
//         {/* <div className="lotterycard-descc">
//             <p>
//               By clicking the below button after connecting your Wallet ,You'll
//               get some tokens to take participation in a lottery.
//             </p>
//           </div> */}
//         <div className="lotterycard-button">
//           <Button
//             className="btn-primary w-100"
//             variant="primary"
//             type="submit"
//             onClick={handleBuyTicket}
//           >
//             {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
//             Get Airdrop
//           </Button>
//         </div>
//       </div>

//       <button onClick={get_price}>get</button>
//       <h4>Airdrop Count : {lotteryPrice}</h4>
//     </>
//   );
// };

// export default Airdrop;
//==========================================
//ABOVE REAL AIRDROP PAGE
//BELOW IS TESTING FOR OTHER PAGES
//=====================================
//HERE FOR LOTTERY BUYING

import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import {
  get_lottery_ticket_price,
  handleBuyTicket,
  handleStorageDeposit,
} from "../../nearJs/utils";

// import { NearContext } from "../../nearJs/provider";
// import { useContext } from "react";

const Airdrop = () => {
  // const { getTicketPrice } = useContext(NearContext);

  const [lotteryPrice, setLotteryPrice] = useState(0);
  const get_price = async () => {
    let res = await get_lottery_ticket_price();
    setLotteryPrice(res);
    console.log(lotteryPrice);
  };

  // const [price, setPrice] = useState(0);
  // const handlePrice = async () => {
  //   let res = await getTicketPrice();
  //   setPrice(res);
  // };

  return (
    <>
      <div className="lotterycard text-center bg-white">
        <div className="lotterycard-title">
          <h2 className="text-uppercase">Airdroping of Lottery Token</h2>
          <p>Paricipate In Lottery</p>
          <p>Try you LUCK!</p>
        </div>
        <div className="lotterycard-input">
          <button onClick={get_price}>get</button>
          <p>Lottery Ticket Price : {lotteryPrice}</p>
          <p>Total Tickets : {lotteryPrice}</p>
          <p>Lottery State : {lotteryPrice}</p>

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
            onClick={handleStorageDeposit}
          >
            {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
            Deposit Storage
          </Button>
          <Button
            className="btn-primary w-100"
            variant="primary"
            type="submit"
            onClick={handleBuyTicket}
          >
            {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
            Buy Ticket
          </Button>
        </div>
      </div>
    </>
  );
};

export default Airdrop;

//==============================
//below airdrop functionality test

// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import { handleAirdrop, handleStartNewLottery } from "../../nearJs/utils";

// const Airdrop = () => {
//   // const get_price = async () => {
//   //   let res = await get_lottery_ticket_price();
//   //   setLotteryPrice(res);
//   //   console.log(lotteryPrice);
//   // };

//   // const [price, setPrice] = useState(0);
//   // const handlePrice = async () => {
//   //   let res = await getTicketPrice();
//   //   setPrice(res);
//   // };

//   return (
//     <>
//       <div className="lotterycard text-center bg-white">
//         <div className="lotterycard-title">
//           <h2 className="text-uppercase">Airdroping of Lottery Token</h2>
//           <p>Airdrop Details are Below</p>
//         </div>
//         <div className="lotterycard-input">
//           <h4>Airdrop Count : </h4>
//         </div>
//         <div className="lotterycard-descc">
//           <p>
//             By clicking the below button after connecting your Wallet ,You'll
//             get some tokens to take participation in a lottery.
//           </p>
//         </div>
//         <div className="lotterycard-button">
//           <Button
//             className="btn-primary w-100"
//             variant="primary"
//             type="submit"
//             onClick={handleAirdrop}
//           >
//             {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
//             Get Airdrop
//           </Button>

//           <Button
//             className="btn-primary w-100"
//             variant="primary"
//             type="submit"
//             onClick={handleStartNewLottery}
//           >
//             {/* <img src={Lock} className="img-fluid" alt="lock icon" /> lottery and */}
//             Start New Lottery
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Airdrop;

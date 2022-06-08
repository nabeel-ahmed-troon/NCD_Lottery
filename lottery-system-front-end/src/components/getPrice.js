import { NearContext } from "../nearJs/provider";
import { useContext, useState } from "react";

export default function GetPrice() {
  const { getTicketPrice } = useContext(NearContext);
  const [price, setPrice] = useState(0);

  const handlePrice = async () => {
    let res = await getTicketPrice();
    setPrice(res);
  };

  return (
    <>
      <button onClick={handlePrice}>Price</button>
      <h3>Price of Ticket is {price}</h3>
    </>
  );
}

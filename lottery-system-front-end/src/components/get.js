import { NearContext } from "../nearJs/provider";
import { useContext } from "react";

export default function Get() {
  const { login } = useContext(NearContext);
  const handleLoginChange = () => {
    login();
    /* let abc = isRegistered()
        console.log("response", abc) */
  };

  return <button onClick={handleLoginChange}>connect</button>;
}

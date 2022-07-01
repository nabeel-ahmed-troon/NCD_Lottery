import "./assets/scss/screen.css";
import Home from "./components/Home";
import { getConfig } from "./nearJs/config.js";
import { get_lottery_ticket_price } from "./nearJs/utils";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

// import NavBar from "./components/NavBar";
// import Header from "./components/Header";
import "./assets/scss/screen.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <NavBar /> */}
      {/* <Router>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router> */}
      <Home />
    </>
  );
}

export default App;

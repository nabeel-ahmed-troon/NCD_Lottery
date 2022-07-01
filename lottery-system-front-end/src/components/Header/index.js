import { login as signIn, logout } from "../../nearJs/utils";
import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/lottery_logo.png";

const Header = () => {
  const [login, setLogin] = useState("Connect Wallet");
  const [accountId, setAccountId] = useState("Not Connected");
  const [connected, setConnected] = useState("Not Connected");
  useEffect(() => {
    if (window.walletConnection.isSignedIn()) {
      let id = window.walletConnection.getAccountId();
      console.log(id);
      setAccountId(id);
      // let res = accountId;
      setConnected(id);
    }
  }, []);
  useEffect(() => {
    if (window.walletConnection.isSignedIn()) {
      setLogin("Logout");
      setConnected(accountId);
    }
  }, []);

  const handleLogin = () => {
    if (window.walletConnection.isSignedIn()) {
      logout();
      setLogin("Connect Wallet");
    } else {
      signIn();
      setLogin("Logout");
      // let res = accountId;
      setConnected(accountId);
    }
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/">
            <img src={Logo} className="img-fluid logo" alt="logo" />
          </NavLink>

          <p>Status : {accountId}</p>
          <Button
            variant="primary"
            className="btn-primary fs-14"
            onClick={handleLogin}
          >
            {login}
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

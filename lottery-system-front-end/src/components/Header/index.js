// import { connect } from "formik";

// import * as nearAPI from "near-api-js";

// import { NearContext } from "../../nearJs/provider";
// import { useContext } from "react";
// import getConfig from "../../nearJs/config";
// import { NavLink } from "react-router-dom";
// import WalletContext from "../../store/Wallet/WalletContext";
// import Logo from "../../assets/images/logo.png";
// import MetaIcon from "../../assets/images/metamaskicon.png";

//===============================================================
// const { connect, keyStores, WalletConnection } = nearAPI;
// const signIn = async () => {
//   console.log("run");
//   const config = {
//     // networkId: "testnet",
//     // keyStore: new keyStores.BrowserLocalStorageKeyStore(),
//     // nodeUrl: "https://rpc.testnet.near.org",
//     // walletUrl: "https://wallet.testnet.near.org",
//     // helperUrl: "https://helper.testnet.near.org",
//     // explorerUrl: "https://explorer.testnet.near.org",
//     networkId: "testnet",
//     contractName: "ncd_staking_contract.testnet",
//     nodeUrl: "https://rpc.testnet.near.org",
//     walletUrl: "https://wallet.testnet.near.org",
//     helperUrl: "https://helper.testnet.near.org",
//     explorerUrl: "https://explorer.testnet.near.org",
//   };
//   console.log("run1", config);
//   // connect to NEAR
//   const keyStore = new keyStores.BrowserLocalStorageKeyStore();
//   const near = await connect({ ...config, keyStore });
//   console.log("run2", near);
//   // create wallet connection
//   const wallet = new WalletConnection(near);

//   // redirects user to wallet to authorize your dApp
//   // this creates an access key that will be stored in the browser's local storage
//   // access key can then be used to connect to NEAR and sign transactions via keyStore
//   console.log("run3", wallet.getAccountId());
//   let c = await wallet.requestSignIn();
//   console.log("run4", c);
//   if (wallet.isSignedIn()) {
//     console.log("running");
//   }
// };

//=================================================================
import { login as signIn, logout } from "../../nearJs/utils";
import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/lottery_logo.png";

const Header = () => {
  // const { login } = useContext(NearContext);

  // const handleLoginChange = () => {
  //   login();
  //   /* let abc = isRegistered()
  //       console.log("response", abc) */
  // };
  const [login, setLogin] = useState("Connect Wallet");
  const [accountId, setAccountId] = useState("");
  useEffect(() => {
    if (window.walletConnection.isSignedIn()) {
      let id = window.walletConnection.getAccountId();
      setAccountId(id);
    }
  }, []);
  useEffect(() => {
    if (window.walletConnection.isSignedIn()) {
      setLogin("Logout");
    }
  }, []);

  const handleLogin = () => {
    if (window.walletConnection.isSignedIn()) {
      logout();
      setLogin("Connect Wallet");
    } else {
      signIn();
      setLogin("Logout");
    }
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/">
            <img src={Logo} className="img-fluid logo" alt="logo" />
          </NavLink>
          <p>Your Id : {accountId}</p>
          {/* <Button
            variant="primary"
            className="btn-primary fs-14"
            onClick={signIn}
          >
            Connect Wallet
          </Button> */}

          <Button
            variant="primary"
            className="btn-primary fs-14"
            onClick={handleLogin}
          >
            {login}
          </Button>
        </Container>
        <p>Your Id : {accountId}</p>
      </Navbar>
    </header>
  );
};

export default Header;

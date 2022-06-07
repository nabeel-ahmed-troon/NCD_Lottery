import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header";
// import Footer from "../Footer";
import Lottery from "../Lottery";

const Home = () => {
  return (
    <>
      <Header />
      <section className="staking-page">
        <Container>
          <Lottery />
        </Container>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Home;

import React from "react";
import { Form, Button } from "react-bootstrap";
import Stack from "@mui/material/Stack";
// import { Formik } from "formik";
// import { validationSchema } from "../../helpers/Validations";
// import Bucks from "../../assets/images/bucks.svg";
// import Lock from "../../assets/images/lock.svg";

const Admin = () => {
  return (
    // <Formik
    //   validationSchema={validationSchema}
    //   onSubmit={(values, { setSubmitting, resetForm }) => {
    // console.log(values);
    //   }}
    //   initialValues={{
    // amount: "",
    //   }}
    // >
    //   {({ handleSubmit, handleChange, values, errors }) => (
    <>
      <Form noValidate>
        <div className="stakecard text-center bg-white">
          <div className="stakecard-title">
            <h2 className="text-uppercase">Admin Panel</h2>
            <p>Please enter the amount below to airdrop token</p>
          </div>

          <div className={`stakecard-button`}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Button
                className="btn-primary "
                //   className="admin_card"
                //   className={`btn-primary w-30`}
                variant="primary"
                spacing={60}
                type="submit"
              >
                {/* <img src={Lock} className="img-fluid" alt="lock icon" /> Stake and */}
                Start Lottery
              </Button>

              <Button
                className="btn-primary"
                //   className={`btn-toggle me-3`}
                variant="primary"
                spacing={2}
                type="submit"
              >
                {/* <img src={Lock} className="img-fluid" alt="lock icon" /> Stake and */}
                Pick Winner
              </Button>
            </Stack>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Admin;

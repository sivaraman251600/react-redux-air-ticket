import axios from "axios";
import React, { useState } from "react";
import "../Registration_Page/Registartion.css";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useNavigate } from "react-router";

function Registration() {
  const [registrationDetails, setRegistrationDetails] = useState({
    fullName: "",
    mobileno: 0,
    emailid: "",
    password: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const navigateToLogin = useNavigate();
  const [show, setShow] = useState(false);
  const [fieldEmptyError, setFieldEmptyError] = useState(false);

  const formSubmit = () => {
    if (
      registrationDetails.fullName.trim() !== "" &&
      registrationDetails.mobileno.toString().length !== 0 &&
      registrationDetails.emailid.trim() !== "" &&
      registrationDetails.password.trim() !== ""
    ) {
      setFieldEmptyError(false);
      axios
        .post("http://localhost:3001/RegistartionDetails", registrationDetails)
        .then((res) => {
          setStatus(res.status);
          if (res.status === 201) {
            setShow(true);
          }
        })
        .catch((err) => setError(err.response.status));
    } else {
      setFieldEmptyError(true);
    }
  };

  const navigateToLoginPage = () => {
    navigateToLogin("/login");
  };

  return (
    <div className="registration-wrapper">
      <h1>Register User</h1>
      {fieldEmptyError && <h4>Please Fill The Input Field</h4>}
      <div className="form-wrapper">
        <label htmlFor="fullname">Full Name</label>
        <input
          name="fullname"
          type={"text"}
          required
          onChange={(e) =>
            setRegistrationDetails({
              ...registrationDetails,
              fullName: e.target.value,
            })
          }
        />{" "}
        <br />
        <label htmlFor="mobileno">Mobile Number</label>
        <input
          name="mobileno"
          type={"number"}
          required
          onChange={(e) =>
            setRegistrationDetails({
              ...registrationDetails,
              mobileno: e.target.value,
            })
          }
        />{" "}
        <br />
        <label htmlFor="emailid">Email Id</label>
        <input
          name="emailid"
          type={"email"}
          required
          onChange={(e) =>
            setRegistrationDetails({
              ...registrationDetails,
              emailid: e.target.value,
            })
          }
        />{" "}
        <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type={"password"}
          required
          onChange={(e) =>
            setRegistrationDetails({
              ...registrationDetails,
              password: e.target.value,
            })
          }
        />{" "}
        <br />
        <button
          className="registration-page-submit-button"
          onClick={() => formSubmit()}
        >
          SUBMIT
        </button>
      </div>
      {show && (
        <Dialog open={show} onClose={() => setShow(false)}>
          <DialogTitle>{"Registartion Was Successful"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <b>Please Click The Ok Button, Navigate To Login Page</b>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={() => navigateToLoginPage()}>Ok</button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default Registration;

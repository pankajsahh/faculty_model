import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Button from "./Button";
import React from "react";

import {
  MDBInput,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBBtn
} from "mdb-react-ui-kit";

const SignIn = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const data = { password: password, username: username };
  const [sucess, setsucess] = useState(false);
  const [error, seterr] = useState("");

  const handelChange = (e) => {
    //for input change in form
    const inputval = e.target.value;
    const name = e.target.placeholder;
    name === "username" ? setusername(inputval) : setpassword(inputval);
  };

  function email_to_id(loginres) {
    //email from login will find the data of that email in db and store to local storage
    setsucess(true);
    let id = "";
    axios
      .get(`http://127.0.0.1:8000/faculty/`, {
        headers: {
          Authorization: `token ${loginres.token}`,
        },
      })
      .then((resp) => {
        // console.log(resp.data)
        for (let key in resp.data) {
          if (resp.data[key].Email === loginres.email) {
            // console.log(resp.data[key],loginres.email);
            id = resp.data[key].id;
            break;
          }
        }
        //store to local storage id and token
        const data = {
          key: id,
          token: loginres.token,
          email: loginres.email,
        };
        localStorage.setItem("myid", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function authinspector() {
    //will take data and from user and send to server and response email will sent to conversion into id for further use
    axios
      .post(`http://127.0.0.1:8000/account/login/`, data)
      .then(function (response) {
        email_to_id(response.data);
      })
      .catch(function (erro) {
        if (!erro?.response) {
          seterr("NO response from server 404 maybe bad enter");
        } else if (erro.response?.status === 400) {
          seterr("Invalid Username or Password");
        } else {
          seterr("Login failed");
        }
      });
   
  }

  return (
    <>
      {sucess ? (
          <div className="biggi">
        <MDBModalDialog  centered >
          <MDBModalContent className="square border border-success">
            <MDBModalBody >
              <b className="text-success" >Logged In successfully.</b>
            </MDBModalBody>
            <MDBModalFooter>
              <Link to="/">
                <MDBBtn className="bg-success">Go to Home Page </MDBBtn>
              </Link>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
        </div>
      ) : (
        
        <div className="check">
          <div className="SignIn_container">
            <div className="SignIn">
              <div className="SignIn_main">
                <div className="SignIn_header">
                  <h2>Sign In </h2>
                  <small>Stay updated on your professional world .</small>
                  <p className="text-danger">Error : {error}</p>
                  <hr />
                </div>
                <div className="SignIn_details">
                  <MDBInput
                    label="username"
                    className="designation"
                    value={username}
                    onChange={handelChange}
                    type="text"
                    placeholder="username"
                  ></MDBInput>
         
                  <MDBInput
                    label="password"
                    value={password}
                    onChange={handelChange}
                    type="password"
                    placeholder="Password"
                    className="designation"
                  ></MDBInput>
                  <br />
                  
                  <button onClick={authinspector} id="button">
                    Sign in
                  </button>
                  <Link to="/register">
                    <Button title="Sign Up"> </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;

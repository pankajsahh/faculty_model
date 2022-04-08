import axios from "axios";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import React from "react";
// dialog box

import {
  MDBBtn,
  MDBInput,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Register = () => {
  const defaultData = {
    Name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    department: "",
    designation: "",
  };
  const [data, setdata] = useState(defaultData);
  const [sucess, setsucess] = useState(false);
  const [error, seterror] = useState("");






  function handelRegisterChanges(props) {
    const { name, value } = props.target;
    setdata({
      ...data,
      [name]: value,
    });
  }

  function createFacultytodatabase(res) {
    axios
      .post(
        `http://127.0.0.1:8000/faculty/`,
        {
          Name: data.Name,
          Department: data.department,
          Designation: data.designation,
          Email: data.email,
        },
        {
          headers: {
            Authorization: `token ${res.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "db created");
        localStorage.setItem(
          "myid",
          JSON.stringify({
            key: response.data.id,
            token: res.token,
            email: response.data.Email,
          })
        );
      });
  }

  function MakeAnewUser() {
    axios
      .post(`http://127.0.0.1:8000/account/register/`, {
        username: data.username,
        email: data.email,
        password: data.password,
        password2: data.password2,
      })
      .then((resp) => {
     
        if (resp.data.username[0].length < 2) {
          // this trigger only if register sucess

          setsucess(true);
          console.log(resp.data, "user created");
          createFacultytodatabase(resp.data);
        } else {
          seterror(resp.data.username);
        }
      })
      .catch((error) => {
        seterror(error.response.data.Error);
        console.log(error.response.data);
      });
  }

  return (
    <>
      {sucess ? (
        <div className="register_biggi">
          <MDBModalDialog centered>
            <MDBModalContent className="square border border-success">
              <MDBModalBody>
                <b className="text-success">Account created successfully.</b>
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
        <div className="signup_container">
          <div className="signup">
            <div className="signup_main">
              <div className="signup_header">
                <h2>Create an Account </h2>
                <small>Sign Up with your email address.</small>
                <hr />
                <p className="text-warning">{error}</p>
              </div>
              <div className="signup_details">
                <MDBInput label="Name"
                  type="text"
                  className="designation"
                  value={data.Name}
                  onChange={handelRegisterChanges}
                  name="Name"
                />
                
                
                  
                <MDBInput label="username"
                  className="designation"
                  value={data.username}
                  onChange={handelRegisterChanges}
                  type="text"
                  name="username"
                />
                
                <MDBInput label="designation"
                  className="designation"
                  value={data.designation}
                  onChange={handelRegisterChanges}
                  type="text"
                  name="designation"
                />{" "}
              
                <MDBInput label="Email"
                  type="email"
                  className="designation"
                  value={data.email}
                  onChange={handelRegisterChanges}
                  name="email"
                />
             
                <MDBInput label="Department"
                  type="text"
                  className="designation"
                  value={data.department}
                  onChange={handelRegisterChanges}
                  name="department"
                />
             
                <MDBInput label="Password"
                  type="password"
                 
                  className="designation"
                  value={data.password}
                  onChange={handelRegisterChanges}
                  name="password"
                />
                <MDBInput label="Confirm Password"
                  type="password"
                  
                  className="designation"
                  value={data.password2}
                  onChange={handelRegisterChanges}
                  name="password2"
                />
             
                <br />
                <MDBBtn
                  onClick={MakeAnewUser}
                >Create new user </MDBBtn>
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;

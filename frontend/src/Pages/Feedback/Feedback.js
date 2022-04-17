import "./Feedback.css";
import emailjs from 'emailjs-com';
import LeftNav from "../../components/LeftNav/LeftNav";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";


import {
  MDBInput,
  MDBTextArea,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBBtn
} from "mdb-react-ui-kit";
const Feedback = () => {
<<<<<<< HEAD
<<<<<<< HEAD

  const [flag,setFlag]=useState(false);

=======
  const [flag,setFlag]=useState(false);
>>>>>>> bf96d1b2bc28c56a1e5db72b665efc9aaaa69cca
=======
  const [flag,setFlag]=useState(false);
>>>>>>> 08754f10cc780bd471b0362d29cf25fbe75e8cef
  let sendFeedback = (e)=>{
      e.preventDefault();
      emailjs.sendForm('service_d64zsci','template_qnnvkvp',e.target,"NQgpo2o9vpYJX41zY"
      ).then(  setFlag(true) ).catch(err=>{
        console.log(err);
      });

    
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
   if(flag===true){
=======
   if(flag==true){
>>>>>>> bf96d1b2bc28c56a1e5db72b665efc9aaaa69cca
=======
   if(flag==true){
>>>>>>> 08754f10cc780bd471b0362d29cf25fbe75e8cef
     return (
      <div className="biggi">
      <MDBModalDialog  centered >
        <MDBModalContent className="square border border-success">
          <MDBModalBody >
            <b className="text-success" >Feedback sent successfully.</b>
          </MDBModalBody>
          <MDBModalFooter>
            <Link to="/">
              <MDBBtn className="bg-success">Home</MDBBtn>
            </Link>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
      </div>
     )
   }
  if(localStorage.getItem("myid")===null){
    return <Navigate to="/login" />;
}
  
  return (
   
    <div className="feedback_page">
        <div >
        <LeftNav/>
        </div>
      <div className="Feedback_container ">
        <div className="Feedback">
          <div className="Feedback_header">
            <h2 className="text-success">Feedback Form </h2>
            <h4>We value your feedback</h4>
            <hr></hr>
          </div>
          <form onSubmit={sendFeedback}>
          <MDBInput
            label="Name"
              type="text"
              placeholder="Name"
              className="designation"
              name="Name"
            ></MDBInput>
            <MDBInput
            label="Email"
              type="email"
              placeholder="Email"
              className="designation"
              name="Email"
            ></MDBInput>
            <MDBTextArea
            label="feedback"
              className="h-25 designation tex"
              placeholder="Please express your experience."
              name="feedback"
            ></MDBTextArea>
            <button className="button_submitfeed">Submit</button>
          </form>
        </div>
      </div>
      </div>
   
  );
};
export default Feedback;

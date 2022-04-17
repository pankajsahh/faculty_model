import "./Feedback.css";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import LeftNav from "../../components/LeftNav/LeftNav";
import { Navigate } from "react-router-dom";
const Feedback = () => {
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
            <h4>We value your Feedback</h4>
            <hr></hr>
          </div>
          <form >
            <MDBInput
            label="Email"
              type="email"
              placeholder="Email"
              className="designation"
              name="email"
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

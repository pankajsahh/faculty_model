import { Navigate } from "react-router-dom";
import LeftNav from "../../components/LeftNav/LeftNav";
import "./Contact.css";

const Contact = () => {
  if(localStorage.getItem("myid")===null){
    return <Navigate to="/login" />;
}
 
  return (
    <div className="contact_page">
        <div >
        <LeftNav/>
        </div>
      <div className="Feedback_container ">
        <div className="Feedback">
          <div className="Feedback_header">
            <h2 className="text-success">We are here </h2>
            <small>Let's have a talk.</small>
            <hr></hr>
          </div>
          <p className="contact">
            <a className="contact" href="tel:+91 9142277970">
              +91: 9142277970
            </a>{" "}
          </p>
          <p className="contact">
            <a className="contact" href="tel:+91 8010011556">
              +91: 8010011556
            </a>
          </p>
          <p className="contact text-success">Drop a mail @.</p>
          <p className="contact ">
            <a className="contact" href="mailto:pankajsahu19056@gmail.com">
              pankajsahu19056@gmail.com
            </a>
            <br/>
            <a className="contact" href="mailto:avengershahnwaz1@gmail.com">
              avengershahnwaz1@gmail.com
            </a>
          </p>
        </div>
      </div>
   </div>
  );
};
export default Contact;

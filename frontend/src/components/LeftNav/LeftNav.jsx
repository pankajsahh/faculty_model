import Logo from "../../assets/logo.png";
import "./LeftNav.css";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Left_nav = () => {
  return (
    <>
      <img className="mainLogo" src={Logo} alt="logo" />
      <ul className="list_of_tabs">
        <Link to="/">
          <li className="myprofile">
            <MDBIcon fas icon="user-alt" /> My profile
          </li>
        </Link>
        <Link to="/search">
          <li className="search">
            <MDBIcon fab icon="searchengin" /> Search
          </li>
        </Link>
        <Link to="/feedback">
          <li className="feedback">
            <MDBIcon fas icon="comments" /> Feedback
          </li>
        </Link>
        <Link to="/contactUs">
          <li className="contactUs">
            <MDBIcon fas icon="headset" /> Contact Us
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Left_nav;

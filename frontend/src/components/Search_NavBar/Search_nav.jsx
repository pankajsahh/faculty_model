import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import "./searchnav.css";
const SearchNavBar = () => {
  return (
    <div className="dnlodnavigator">
      <div color="info">
        <Link to="/search/faculty">
          <div className="navi" >
            <MDBIcon fas icon="cloud-download-alt" /> Download faculty data
          </div>
        </Link>
      </div>

      <div color="info">
        <Link to="/search/books">
          <div className="navi text" >
            <MDBIcon fas icon="cloud-download-alt" /> Download books data
          </div>
        </Link>
      </div>

      <div color="info">
        <Link to="/search/journals">
          <div className="navi" >
            <MDBIcon fas icon="cloud-download-alt" /> Download Journals data
          </div>
        </Link>
      </div>

      <div color="info">
        <Link to="/search/confrences">
          <div className="navi" >
            <MDBIcon fas icon="cloud-download-alt" /> Download confrences data
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};
export default SearchNavBar;

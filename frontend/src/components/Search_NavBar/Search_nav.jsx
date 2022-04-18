import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";

import "./searchnav.css";
const SearchNavBar = () => {
  const {searchnavcolor}=useContext(Context);
  console.log(searchnavcolor)
  return (
    <div className="dnlodnavigator">
      <div color="info">
        <Link to="/search/faculty">
          <div className={`navi ${searchnavcolor==="faculty"?"blink": ""} ` } >
             Download faculty data
          </div>
        </Link>
      </div>

      <div color="info">
        <Link to="/search/books">
          <div className={`navi text ${searchnavcolor==="book"?"blink": ""} ` } >
            Download books data
          </div>
        </Link>
      </div>

      <div color="info">
        <Link to="/search/journals">
          <div className={`navi ${searchnavcolor==="journal"?"blink": ""} ` } >
          Download Journals data
          </div>
        </Link>
      </div>

      <div color="info">
        <Link to="/search/confrences">
          <div className={`navi ${searchnavcolor==="confrence"?"blink": ""} ` }>
          Download confrences data
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};
export default SearchNavBar;

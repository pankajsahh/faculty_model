import { MDBIcon } from "mdb-react-ui-kit";
import { useContext } from "react";
import Context from "../context/Context.js";
import { ExportCSV } from "../data/faculty-data.jsx";

import "./searchnav.css";
const SearchNavBar = () => {
  const {djournl,dconfrnc,dbook, fethdata } = useContext(Context);

  return (
    <div className="dnlodnavigator">
      <div  color="info">
        <ExportCSV csvData={fethdata} fileName={`facultydata`}>
        <MDBIcon fas icon="cloud-download-alt" />  Download faculty data{" "}
        </ExportCSV>{" "}
      </div>

      <div color="info">
        {" "}
        <ExportCSV csvData={dbook} fileName={`booksdata`}>
        <MDBIcon fas icon="cloud-download-alt" />  Download books data {" "}
        </ExportCSV>{" "}
      </div>

      <div  color="info">
        {" "}
        <ExportCSV csvData={djournl} fileName={`journalsdata`}>
        <MDBIcon fas icon="cloud-download-alt" />  Download Journals data{" "}
        </ExportCSV>{" "}
      </div>

      <div  color="info">
        {" "}
        <ExportCSV csvData={dconfrnc} fileName={`confrencesdata`}>
        <MDBIcon fas icon="cloud-download-alt" /> Download confrences data{" "}
        </ExportCSV>{" "}
      </div>
    </div>
  );
};
export default SearchNavBar;

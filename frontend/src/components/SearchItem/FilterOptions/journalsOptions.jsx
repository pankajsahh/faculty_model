import {  MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import Context from "../../context/Context";
import { ExportCSV } from "../../data/faculty-data";
import "./boook.css";

const JournalOption = () => {
  const { filterjournal, setfilterjournal, afterfilterjournal } =
    useContext(Context);

  function changeHandel(e) {
    const { name, value } = e.target;
    setfilterjournal({
      ...filterjournal,
      [name]: value,
    });
  }
  return (
    <>
      <div className="filters">
        <MDBInput
          onChange={changeHandel}
          value={filterjournal.Paper_title}
          name="Paper_title"
          type="text"
          label="Paper title"
        />
        <MDBInput
          onChange={changeHandel}
          value={filterjournal.Year}
          name="Year"
          label="Year"
        />
        <MDBInput
          onChange={changeHandel}
          value={filterjournal.Co_Author}
          name="Co_Author"
          label="Co_Author"
        />
        <MDBInput
          onChange={changeHandel}
          value={filterjournal.Indexing}
          name="Indexing"
          label="Indexing "
        />
        <ExportCSV csvData={afterfilterjournal} fileName={`journalsdata`}>
         Download 
        </ExportCSV>
      </div>
    </>
  );
};
export default JournalOption;

// Co_Author: "",
// Indexing: "",
// Paper_title: "",
// Publisher: "",
// Volume: "",
// Year: "",
// faculty: "",

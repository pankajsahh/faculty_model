import { MDBIcon, MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { useContext } from "react";
import Context from "../context/Context";
import { ExportCSV } from "../data/faculty-data.jsx";
import "./searchengine.css";
const SearchEngine = () => {
  const { fethdata, setsearchBook, searchBook } = useContext(Context);

  function handelchangesearch(e) {
    setsearchBook(e.target.value);
  }

  return (
    <>
      <div className="engine">
        
        <ExportCSV csvData={fethdata} fileName={`FilteredBook`} />
      </div>
    </>
  );
};
export default SearchEngine;

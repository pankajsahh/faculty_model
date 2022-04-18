import {  MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import Context from "../../context/Context";
import { ExportCSV } from "../../data/faculty-data";
import "./boook.css";

const ConfrenceOption = () => {
 const {afterfilterconfrence,filterconfrence, setfilterconfrence} = useContext(Context);

 function changeHandel(e){
    const { name, value } = e.target;
    setfilterconfrence({
            ...filterconfrence,
            [name]: value,
        })
 }
  return (
    <>
      <div className="filters">
        <MDBInput 
        onChange={changeHandel}
        value={filterconfrence.Organizer}
        name="Organizer"
        type="text" label="Organizer name" />
        <MDBInput  
        onChange={changeHandel}
        value={filterconfrence.Year}
        name="Year"
        label="Year" />
        <MDBInput 
        onChange={changeHandel}
        value={filterconfrence.Co_Author}
        name="Co_Author"
        label="Co_Author" />
        <MDBInput 
        onChange={changeHandel}
        value={filterconfrence.Proceeding }
        name="Proceeding"
        label="Proceeding " />
        <ExportCSV csvData={afterfilterconfrence} fileName={`confrencesdata`}>
       Download 
        </ExportCSV>
      </div>
    </>
  );
};
export default ConfrenceOption;


// Co_Author: "please login again "
// Organizer: "no event found"
// Proceeding: ""
// Year: ""
// faculty: ""
// id: ""

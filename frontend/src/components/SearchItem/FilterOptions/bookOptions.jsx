import {  MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import Context from "../../context/Context";
import { ExportCSV } from "../../data/faculty-data";
import "./boook.css";

const BookOption = () => {
 const {afterfilterbooks,filterBook,setfilterBook} = useContext(Context);

 function changeHandel(e){
    const { name, value } = e.target;
    setfilterBook({
            ...filterBook,
            [name]: value,
        })

 }
  return (
    <>
      <div className="filters">
        <MDBInput 
        onChange={changeHandel}
        value={filterBook.Book_title}
        name="Book_title"
        type="text" label="book name" />
        <MDBInput  
        onChange={changeHandel}
        value={filterBook.Year}
        name="Year"
        label="Year" />
        <MDBInput 
        onChange={changeHandel}
        value={filterBook.Co_Author}
        name="Co_Author"
        label="Co_Author" />
        <MDBInput 
        onChange={changeHandel}
        value={filterBook.Publisher}
        name="Publisher"
        label="Publisher" />
        <ExportCSV csvData={afterfilterbooks} fileName={`booksdata`}>
         Download{" "}
        </ExportCSV>
      </div>
    </>
  );
};
export default BookOption;


// "id": 30,
//     "Book_title": "jungle",
//     "Year": "2022-04-13",
//     "Co_Author": "paakjs",
//     "Edition": 3,
//     "Publisher": "publish house",
//     "faculty": 7
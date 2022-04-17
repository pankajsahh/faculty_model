import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import './SearchItem.css'

// Co_Author: "login please"
// Indexing: ""
// Paper_title: "no paper found"
// Publisher: ""
// Volume: ""
// Year: ""
// faculty: ""
// id: ""

const JournalSearchItem=(prop)=>{
    return(
        <div className="FacultyItemView">
        <div className="Facultyimage">
          <img
            src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
            alt=""
          />
        </div>
        <div className="FacultyDetails">
          <h3> {prop.Paper_title}</h3>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Co_Author: {prop.Co_Author}</span>
              </MDBCol>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Publisher : {prop.Publisher}</span>
              </MDBCol>
              <div className="w-100"></div>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span> YEAR : {prop.Year}</span>
              </MDBCol>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Indexing : {prop.Indexing}</span>
              </MDBCol>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>faculty id : {prop.faculty}</span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    )
}

export default JournalSearchItem;
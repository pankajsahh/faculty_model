import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import './SearchItem.css'


const FacultySearchItem=(prop)=>{
    return(
        <div className="FacultyItemView">
        <div className="Facultyimage">
          <img
            src={`https://images.unsplash.com/photo-1577141262638-5548257565d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
            alt=""
          />
        </div>
        <div className="FacultyDetails">
          <h3 className="ms-2 ">{prop.id} : {prop.Name}</h3>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Number Books Published : {prop.BookPublication.length}</span>
              </MDBCol>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Number Confrences Published : {prop.JournalPublication.length}</span>
              </MDBCol>
              <div className="w-100"></div>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span> Number journal Published : {prop.JournalPublication.length}</span>
              </MDBCol>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Department : {prop.Department}</span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    )
}

export default FacultySearchItem;
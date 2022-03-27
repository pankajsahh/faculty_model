import React from "react"
import LeftNav from "../../components/LeftNav/LeftNav";
import './UpdatePage.css'
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';



const UpdatePage =()=>{
    return(
    <div className="UpdatePage">
        <div>
            <LeftNav/>
        </div>
        <div>
        <MDBCard >
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        </div>
    )
}

export default UpdatePage;
import axios from "axios";
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRow } from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import Context from "../context/Context";
import "./BookItem.css";


const BookItem = ({
  id,
  Book_title,
  Year,
  Co_Author,
  Edition,
  Publisher,
  faculty
}) => {

  const {dataftch} = useContext(Context)///for refresh data we reload with this function


  const [error, sererror] = useState("");//popup form error
  const [updateBook, setupdateBook] = useState(false);//popup form handeller
  
  const [bookdata,setbookdata]=useState({ faculty:faculty,  Book_title:"", Year:"", Co_Author:"", Edition:"", Publisher:""});//default datafor popup form




  function BookDeleteFunction() { ///to delete the the specific book from publication
    const user = JSON.parse(localStorage.getItem("myid"));
    axios.delete(
      `http://127.0.0.1:8000/books/${id}`,
      {},
      {
        headers: {
          Authorization: `token ${user.token}`,
        },
      }
    ).then(resp=>{
      console.log(resp.statusText)
      dataftch()
    })
  }


function bookDataChange(e) {
        const { name, value } = e.target;
        setbookdata({
            ...bookdata,
            [name]: value,
        })
    }
  const toggleShowBookUpdater = () => setupdateBook(!updateBook);
  
  function Bookupdatefunction(){///to update the the specific book from publication

    const myid = JSON.parse(localStorage.getItem("myid"))
      if (myid !== null) {
          axios.put(`http://127.0.0.1:8000/books/${id}`, bookdata, {
              headers: {
                  'Authorization': `token ${myid.token}`
              }
          }).then(resp => {
              console.log(resp.data)
              dataftch();
              toggleShowBookUpdater();

          }).catch(error=>{
            console.log(error.response)
            sererror(error.response.statusText)})
      }
  }
 
  return (
    <>
      <div className="BookItemView">
        <div className="Bookimage">
          <img
            src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
            alt=""
          />
        </div>
        <div className="Bookdetails">
          <h3>Book :{Book_title}</h3>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Co_Author :{Co_Author}</span>
              </MDBCol>

              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Publisher :{Publisher}</span>
              </MDBCol>

              <div className="w-100"></div>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span> date of publication : {Year}</span>
              </MDBCol>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Edition:{Edition}</span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="CurdButtonBookPublication">
          <button onClick={toggleShowBookUpdater}>Update</button>
          <button onClick={BookDeleteFunction}>Delete</button>
        </div>
      </div>

      <MDBModal tabIndex='-1' show={updateBook} setShow={setupdateBook}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>update  your book Publication <br /> Error:{error}</MDBModalTitle>

                            <MDBBtn className='btn-close' color='none' onClick={toggleShowBookUpdater}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={bookdata.Book_title}
                                        onChange={bookDataChange}
                                        labelClass='col-form-label'
                                        label='Book Title:'
                                        name='Book_title'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={bookdata.Co_Author}
                                        onChange={bookDataChange}
                                        labelClass='col-form-label'
                                        label='Co Author:'
                                        name='Co_Author'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={bookdata.Publisher}
                                        onChange={bookDataChange}
                                        labelClass='col-form-label'
                                        label='Publisher:'
                                        name='Publisher'
                                    />

                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={bookdata.Year}
                                        onChange={bookDataChange} label="year of Publication" placeholder='.' type='Date' name="Year" />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={bookdata.Edition}
                                        onChange={bookDataChange} label='Edition' id='typeNumber' name='Edition' type='number' />
                                </div>

                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShowBookUpdater}>
                                Close
                            </MDBBtn >
                            <MDBBtn onClick={Bookupdatefunction} >Update Book</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    </>
  );
};

export default BookItem;

import axios from "axios";
import React, { useContext, useState } from "react";
import Context from "../context/Context";
import "./JournalItem.css";
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRow } from "mdb-react-ui-kit";

const JournalItem = ({
  id,
  Paper_title,
  Year,
  Co_Author,
  Volume,
  Publisher,
  Indexing,
  faculty
}) => {
  const {dataftch} = useContext(Context)

  const [error, sererror] = useState("");//popup form error
  const [updatejournal, setupdatejournal] = useState(false);//popup form handeller
  
  const [journaldata,setjournaldata]=useState({ faculty:faculty, id,
    Paper_title:Paper_title,
    Year:Year,
    Co_Author:Co_Author,
    Volume:Volume,
    Publisher:Publisher,
    Indexing:Indexing});//default datafor popup form







  function JournalDeleteFunction() {
    const user = JSON.parse(localStorage.getItem("myid"));
    axios.delete(
      `http://127.0.0.1:8000/journals/${id}`,
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






  function journalDataChange(e) {
    const { name, value } = e.target;
    setjournaldata({
        ...journaldata,
        [name]: value,
    })
}
  const toggleShowjournalUpdater = () => setupdatejournal(!updatejournal);
  //confrence update function
  function journalupdatefunction(){///to update the the specific book from publication

    const myid = JSON.parse(localStorage.getItem("myid"))
      if (myid !== null) {
          axios.put(`http://127.0.0.1:8000/journals/${id}`, journaldata, {
              headers: {
                  'Authorization': `token ${myid.token}`
              }
          }).then(resp => {
              console.log(resp.data)
              dataftch();
              toggleShowjournalUpdater();

          }).catch(error=>{
            console.log(error.response);
            sererror(error.response.statusText)})
      }
  }
 







  return (
    <>
      <div className="JournalItemView">
        <div className="Journalimage">
          <img
            src={`https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
            alt=""
          />
        </div>
        <div className="Journaldetails">
          <h3>Journal :{Paper_title}</h3>
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
                <span>Volume:{Volume}</span>
              </MDBCol>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Indexing:{Indexing}</span>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="CurdButtonJournalPublication">
          <button onClick={toggleShowjournalUpdater}>Update</button>
          <button onClick={JournalDeleteFunction}>Delete</button>
        </div>
      </div>
      <MDBModal tabIndex='-1' show={updatejournal} setShow={setupdatejournal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>update journal of your Publication <br /> Error:{error}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShowjournalUpdater}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={journaldata.Paper_title}
                                        onChange={journalDataChange}
                                        labelClass='col-form-label'
                                        label='Paper_title:'
                                        name='Paper_title'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={journaldata.Co_Author}
                                        onChange={journalDataChange}
                                        labelClass='col-form-label'
                                        label='Co Author:'
                                        name='Co_Author'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={journaldata.Publisher}
                                        onChange={journalDataChange}
                                        labelClass='col-form-label'
                                        label='Publisher:'
                                        name='Publisher'
                                    />

                                </div>

                                <div className='mb-3'>
                                    <MDBInput value={journaldata.Year}
                                        onChange={journalDataChange} label="year of Publication" type='Date' name='Year' />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={journaldata.Volume} onChange={journalDataChange} label='Volume' id='typeNumber' name='Volume' type='number' />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={journaldata.Indexing} onChange={journalDataChange} label='Indexing' id='typeNumber' name='Indexing' type='number' />
                                </div>

                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShowjournalUpdater}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={journalupdatefunction} >update journal</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

    </>
  );
};

export default JournalItem;

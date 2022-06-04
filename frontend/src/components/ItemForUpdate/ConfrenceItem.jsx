import axios from "axios";
import React, { useContext, useState } from "react";
import Context from "../context/Context";
import "./ConfrenceItem.css";
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRow } from "mdb-react-ui-kit" 


const ConfrenceItem = ({id,Organizer,Year,Co_Author,Proceeding,faculty}) =>{
  const [confrencedata,setconfrencedata]=useState({Organizer:Organizer,Year:Year,Co_Author:Co_Author,Proceeding:Proceeding,faculty:faculty})
  const {dataftch} = useContext(Context)

  const [error, sererror] = useState("");//popup form error
  const [updateconfrence, setupdateconfrence] = useState(false);//popup form handeller
  
  function confrenceDeleteFunction() {
    const user = JSON.parse(localStorage.getItem("myid"));
    axios.delete(
      `http://127.0.0.1:8000/confrences/${id}`,
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


function confrenceDataChange(e) {
    const { name, value } = e.target;
    setconfrencedata({
        ...confrencedata,
        [name]: value,
    })
}
  const toggleShowconfrenceUpdater = () => setupdateconfrence(!updateconfrence);
  //confrence update function
  function confrenceupdatefunction(){///to update the the specific book from publication

    const myid = JSON.parse(localStorage.getItem("myid"))
      if (myid !== null) {
          axios.put(`http://127.0.0.1:8000/confrences/${id}`, confrencedata, {
              headers: {
                  'Authorization': `token ${myid.token}`
              }
          }).then(resp => {
              console.log(resp.data)
              dataftch();
              toggleShowconfrenceUpdater();

          }).catch(error=>{
            console.log(error.response);
            sererror(error.response.statusText)})
      }
  }
 



    return(
        <>
      <div className="ConfrenceItemView">
        <div className="Confrenceimage">
          <img
            src={`https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80`}
            alt=""
          />
        </div>
        <div className="Confrencedetails">
          <h3>Confrence Organizer:{Organizer}</h3>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Co_member :{Co_Author}</span>
              </MDBCol>

              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span>Proceedings :{Proceeding}</span>
              </MDBCol>

              <div className="w-100"></div>
              <MDBCol size="6" sm="3" className="w-50 col-example">
                <span> date of publication : {Year}</span>
              </MDBCol>
              
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="CurdButtonConfrencePublication">
          <button onClick={toggleShowconfrenceUpdater}>Update</button>
          <button onClick={confrenceDeleteFunction}>Delete</button>
        </div>
      </div>
      <MDBModal tabIndex='-1' show={updateconfrence} setShow={setupdateconfrence}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>add New confrence to your Publication <br /> Error:{error}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShowconfrenceUpdater}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={confrencedata.Organizer}
                                        onChange={confrenceDataChange}
                                        labelClass='col-form-label'
                                        label='Organizer:'
                                        name='Organizer'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={confrencedata.Co_Author}
                                        onChange={confrenceDataChange}
                                        labelClass='col-form-label'
                                        label='Co Author:'
                                        name='Co_Author'
                                    />

                                </div>

                                <div className='mb-3'>
                                    <MDBInput value={confrencedata.Year}
                                        onChange={confrenceDataChange} label="year of Publication" type='Date' name='Year' />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={confrencedata.Proceeding} onChange={confrenceDataChange} label='Proceeding' id='typeNumber' name='Proceeding' type='number' />
                                </div>

                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShowconfrenceUpdater}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={confrenceupdatefunction} >update confrence</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    </>
    )
}

export default ConfrenceItem;
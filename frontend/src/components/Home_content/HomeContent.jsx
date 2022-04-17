import './HomeContent.css'
import { useContext, useEffect, useRef } from 'react'
import Context from "../context/Context.js";
import axios from 'axios';

///edit functionality for home myprofile tab/////////////////
import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
///////////////////////////////////////


const Home_content = () => {

    ////////////////////EDIT functionality for home myprofile tab  states ///////////

    const [error, sererror] = useState("");

    const [editMyprofile, seteditMyprofile] = useState(false);
    const [addNewBook, setaddNewBook] = useState(false);
    const [addNewconfrence, setaddNewconfrence] = useState(false);
    const [addNewjournal, setaddNewjournal] = useState(false);

    //handel form default data change and store to state

    const defaulProfiletData = {
        Name: "",
        Department: "",
        Designation: "",
    }
    const [myProfileEditData, setmyProfileEditData] = useState(defaulProfiletData);

    ////////////confrence default data  for form/////////////////
    const NewconfrencedefaultData = {
        Organizer: "",
        Year: "",
        Co_Author: "",
        Proceeding: "",

    }
    const [NewconfrenceData, setNewconfrenceData] = useState(NewconfrencedefaultData);

    ////////////book default data  for form/////////////////
    const NewBookdefaultData = {
        Publisher: "",
        Co_Author: "",
        Year: "",
        Book_title: "",
        Edition: "",
    }
    const [NewBookData, setNewBookData] = useState(NewBookdefaultData);

    ////////////journal default data  for form/////////////////
    const NewjournaldefaultData = {
        Paper_title: "",
        Year: "",
        Co_Author: "",
        Volume: "",
        Publisher: "",
        Indexing: "",

    }
    const [NewjournalData, setNewjournalData] = useState(NewjournaldefaultData);



    ////////////basic view of home content ////////////////////////////////////////////////

    const { Faculty, setFaculty , dataftch } = useContext(Context);
    const data_fetch_Reference = useRef();
    data_fetch_Reference.current = dataftch;//will create reference for our use effect
    
    useEffect(() => { //everytime component render it get called
        data_fetch_Reference.current()
    }, [])
    //////////////////now edit functionality in home myprofile window functions (handel form input changes) //////////////////

    function handelPopupDatachange(e) {
        const { name, value } = e.target;
        setmyProfileEditData({
            ...myProfileEditData,
            [name]: value,
        })

    }
    const toggleShow = () => seteditMyprofile(!editMyprofile);////this will show and hide the form for edit in home page

    function OnSubmitChangeDepartmentDetailMyProfile() {
        const myid = JSON.parse(localStorage.getItem("myid"))
        if (myid !== null) {
            axios.put(`http://127.0.0.1:8000/faculty/${myid.key}`, myProfileEditData, {
                headers: {
                    'Authorization': `token ${myid.token}`
                }
            }).then(resp => {
                console.log(resp.data)
                setFaculty(resp.data)
                toggleShow();

            }).catch(error=>{sererror(error.response.statusText)})
        }
    }
    ////////////////////////add book publication  forms //////////////////////////////////

    const toggleShowBookAdder = () => setaddNewBook(!addNewBook);
    function popupAddbookDataChange(e) {
        const { name, value } = e.target;
        setNewBookData({
            ...NewBookData,
            [name]: value,
        })
    }
    function postNewBook() {
        console.log(NewBookData)
        const myid = JSON.parse(localStorage.getItem("myid"))
        console.log("hii i am going to post new book", NewBookData)

        if (myid !== null) {
            axios.post(`http://127.0.0.1:8000/books/`, { ...NewBookData, faculty: myid.key }, {
                headers: {
                    'Authorization': `token ${myid.token}`
                }
            }).then(resp => {
                console.log(resp.data)
                toggleShowBookAdder();

            })
                .catch(error => sererror(error.response.statusText))
        }
    }


    ////////////////////////////////confrence adding functionality///////////////////////////
    const toggleShowconfrenceAdder = () => setaddNewconfrence(!addNewconfrence);
    function popupAddconfrenceDataChange(e) {
        const { name, value } = e.target;
        setNewconfrenceData({
            ...NewconfrenceData,
            [name]: value,
        })
    }

    function postNewconfrence() { //will create new confrence with id of use and post to his id
        console.log(NewconfrenceData)
        const myid = JSON.parse(localStorage.getItem("myid"))
        console.log("hii i am going to post new confrence", NewconfrenceData)
        if (myid !== null) {
            axios.post(`http://127.0.0.1:8000/confrences/`, { ...NewconfrenceData, faculty: myid.key }, {
                headers: {
                    'Authorization': `token ${myid.token}`
                }
            }).then(resp => {
                console.log(resp.data)
                toggleShowconfrenceAdder();

            })
                .catch(error => sererror(error.response.statusText))
        }
    }
    ////////////////////////////////confrence adding functionality///////////////////////////


    const toggleShowjournalAdder = () => setaddNewjournal(!addNewjournal);
    function popupAddjournalDataChange(e) {
        const { name, value } = e.target;
        setNewjournalData({
            ...NewjournalData,
            [name]: value,
        })
    }

    function postNewjournal() { //will create new confrence with id of use and post to his id
        console.log(NewjournalData)
        const myid = JSON.parse(localStorage.getItem("myid"))
        console.log("hii i am going to post new confrence", NewjournalData)
        if (myid !== null) {
            axios.post(`http://127.0.0.1:8000/journals/`, { ...NewjournalData, faculty: myid.key }, {
                headers: {
                    'Authorization': `token ${myid.token}`
                }
            }).then(resp => {
                console.log(resp.data)
                toggleShowjournalAdder();

            })
                .catch(error => sererror(error.response.statusText))
        }
    }
    ////////////////////////////////template views here /////////////////////////////////////


    return (
        <>
            <div className="my_profile">
                <div className="my_profile_image">
                    <img src={"data:image/png;base64,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"} alt="..." />
                </div>
                <div className="ProfileContent">
                    <h5>{Faculty.Name}</h5>
                    <p> {Faculty.Department}</p>
                    <p> {Faculty.Designation}</p>
                    <button onClick={toggleShow}>Edit</button>
                </div>
            </div>
            <div className="Publlicatons">
                <div className="publication">
                    <div className="publication_image">
                        <img src={"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"} alt="..." />
                    </div>
                    <div className="Curd_buttons">

                        <h2>Books</h2>
                        <p>Please add new books to your profile !!!</p>
                        <button onClick={toggleShowBookAdder}>Add</button>
                       <Link to='/update/Booklist'> <button >Update</button> </Link>
                    </div>
                </div>
                <div className="publication">
                    <div className="publication_image">
                        <img src={"https://images.unsplash.com/photo-1507914997623-5b75b37d9cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"} alt="..." />
                    </div>
                    <div className="Curd_buttons">
                        <h2>Journals</h2>
                        <p>Please add new journals to your profile !!!</p>
                        <button onClick={toggleShowjournalAdder}>Add</button>
                        <Link to='/update/journallist'> <button >Update</button></Link>
                    </div>
                </div>
                <div className="publication">
                    <div className="publication_image">
                        <img src={"https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg"} alt="..." />
                    </div>
                    <div className="Curd_buttons">
                        <h2>Conferences</h2>
                        <p>Please add new conferences to your profile !!!</p>
                        <button onClick={toggleShowconfrenceAdder}>Add</button>
                        <Link to='/update/confrencelist'> <button >Update</button></Link>   
                    </div>
                </div>
            </div>
            {/* here is the edit view of our user input form to edit the my profile */}
            <MDBModal tabIndex='-1' show={editMyprofile} setShow={seteditMyprofile}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Change your MyProfile details <br /> Error:{error}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={myProfileEditData.Name}
                                        onChange={handelPopupDatachange}
                                        labelClass='col-form-label'
                                        label='Name:'
                                        name='Name'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={myProfileEditData.Department}
                                        onChange={handelPopupDatachange}
                                        labelClass='col-form-label'
                                        label='Department:'
                                        name='Department'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={myProfileEditData.Designation}
                                        onChange={handelPopupDatachange}
                                        labelClass='col-form-label'
                                        label='Designation:'
                                        name='Designation'
                                    />

                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={OnSubmitChangeDepartmentDetailMyProfile}>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

            {/* popup for add book  */}

            <MDBModal tabIndex='-1' show={addNewBook} setShow={setaddNewBook}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Add New Book to your Publication <br /> Error:{error}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShowBookAdder}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewBookData.Book_title}
                                        onChange={popupAddbookDataChange}
                                        labelClass='col-form-label'
                                        label='Book Title:'
                                        name='Book_title'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewBookData.Co_Author}
                                        onChange={popupAddbookDataChange}
                                        labelClass='col-form-label'
                                        label='Co Author:'
                                        name='Co_Author'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewBookData.Publisher}
                                        onChange={popupAddbookDataChange}
                                        labelClass='col-form-label'
                                        label='Publisher:'
                                        name='Publisher'
                                    />

                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={NewBookData.Year}
                                        onChange={popupAddbookDataChange} label="year of Publication"  type='Date' name="Year" />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={NewBookData.Edition}
                                        onChange={popupAddbookDataChange} label='Edition' id='typeNumber' name='Edition' type='number' />
                                </div>

                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShowBookAdder}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={postNewBook}>Post New Book</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            {/* popup for add confrence  */}
            <MDBModal tabIndex='-1' show={addNewconfrence} setShow={setaddNewconfrence}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Add New confrence to your Publication <br /> Error:{error}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShowconfrenceAdder}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewconfrenceData.Organizer}
                                        onChange={popupAddconfrenceDataChange}
                                        labelClass='col-form-label'
                                        label='Organizer:'
                                        name='Organizer'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewconfrenceData.Co_Author}
                                        onChange={popupAddconfrenceDataChange}
                                        labelClass='col-form-label'
                                        label='Co Author:'
                                        name='Co_Author'
                                    />

                                </div>

                                <div className='mb-3'>
                                    <MDBInput value={NewconfrenceData.Year}
                                        onChange={popupAddconfrenceDataChange} label="year of Publication" type='Date' name='Year' />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={NewconfrenceData.Proceeding} onChange={popupAddconfrenceDataChange} label='Proceeding' id='typeNumber' name='Proceeding' type='number' />
                                </div>

                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShowconfrenceAdder}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={postNewconfrence} >Post New confrence</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            {/* popup for add new journal  */}
            <MDBModal tabIndex='-1' show={addNewjournal} setShow={setaddNewjournal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Add New journal to your Publication <br /> Error:{error}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShowjournalAdder}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewjournalData.Paper_title}
                                        onChange={popupAddjournalDataChange}
                                        labelClass='col-form-label'
                                        label='Paper_title:'
                                        name='Paper_title'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewjournalData.Co_Author}
                                        onChange={popupAddjournalDataChange}
                                        labelClass='col-form-label'
                                        label='Co Author:'
                                        name='Co_Author'
                                    />

                                </div>
                                <div className='mb-3'>

                                    <MDBInput
                                        value={NewjournalData.Publisher}
                                        onChange={popupAddjournalDataChange}
                                        labelClass='col-form-label'
                                        label='Publisher:'
                                        name='Publisher'
                                    />

                                </div>

                                <div className='mb-3'>
                                    <MDBInput value={NewjournalData.Year}
                                        onChange={popupAddjournalDataChange} label="year of Publication" type='Date' name='Year' />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={NewjournalData.Volume} onChange={popupAddjournalDataChange} label='Volume' id='typeNumber' name='Volume' type='number' />
                                </div>
                                <div className='mb-3'>
                                    <MDBInput value={NewjournalData.Indexing} onChange={popupAddjournalDataChange} label='Indexing' id='typeNumber' name='Indexing' type='number' />
                                </div>

                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShowjournalAdder}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={postNewjournal} >Post New journal</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

        </>
    )
}

export default Home_content;
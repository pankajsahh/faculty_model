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
                    <img src={"https://cdn.pixabay.com/photo/2015/04/18/11/03/profile-728591_960_720.jpg"} alt="..." />
                </div>
                <div className="ProfileContent">
                    <h5>{Faculty.Name}</h5>
                    <p> {Faculty.Department}</p>
                    <p> {Faculty.Designation}</p>
                    <button onClick={toggleShow}>edit</button>
                </div>
            </div>
            <div className="Publlicatons">
                <div className="publication">
                    <div className="publication_image">
                        <img src={"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"} alt="..." />
                    </div>
                    <div className="Curd_buttons">

                        <h2>Books Published</h2>
                        <p>please add new books to your profile !!!</p>
                        <button onClick={toggleShowBookAdder}>add</button>
                       <Link to='/update/Booklist'> <button >update / delete</button> </Link>
                    </div>
                </div>
                <div className="publication">
                    <div className="publication_image">
                        <img src={"https://images.unsplash.com/photo-1507914997623-5b75b37d9cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"} alt="..." />
                    </div>
                    <div className="Curd_buttons">
                        <h2>journals Published</h2>
                        <p>please add new journals to your profile !!!</p>
                        <button onClick={toggleShowjournalAdder}>add</button>
                        <Link to='/update/journallist'> <button >update / delete</button></Link>
                    </div>
                </div>
                <div className="publication">
                    <div className="publication_image">
                        <img src={"https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg"} alt="..." />
                    </div>
                    <div className="Curd_buttons">
                        <h2>confrences Published</h2>
                        <p>please add new confrences to your profile !!!</p>
                        <button onClick={toggleShowconfrenceAdder}>add</button>
                        <Link to='/update/confrencelist'> <button >update / delete</button></Link>   
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
                            <MDBModalTitle>add New Book to your Publication <br /> Error:{error}</MDBModalTitle>

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
                                        onChange={popupAddbookDataChange} label="year of Publication" placeholder='.' type='Date' name="Year" />
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
                            <MDBModalTitle>add New confrence to your Publication <br /> Error:{error}</MDBModalTitle>
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
                            <MDBModalTitle>add New journal to your Publication <br /> Error:{error}</MDBModalTitle>
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
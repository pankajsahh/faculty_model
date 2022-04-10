import Context from "./Context.js";
import { useState  } from "react";
import axios from "axios";

const Store = (prop) => {

    const Myprofile = {
        id:"",BookPublication:[{id:"",Book_title:"no book found",Year:"",Co_Author:"login please",Edition:"",Publisher:"",faculty:""}],JournalPublication:[{id:"",Paper_title:"no paper found",Year:"",Co_Author:"login please",Volume:"",Publisher:"",Indexing:"",faculty:""}],ConfrencePublication:[{id:"",Organizer:"no event found",Year:"",Co_Author:"please login again ",Proceeding:"",faculty:""}],Name:"NotFound",Department:"Please Login",Designation:"",Email:""
    }
    const [searchterm,setsearchterm]=useState("")
    const [Faculty, setFaculty] = useState(Myprofile);
    console.log(Faculty,"i am having some data for you ");
    const [fethdata,setfethdata] = useState([
        {
        "BookPublication": [],
        "ConfrencePublication": [],
        "Department": "",
        "Designation": "",
        "Email": "",
        "JournalPublication": [],
        "Name": "pankaj",
        "id": 0}])
    // get id and access_token from localStorage
    //for featching data from local host ( id and token )
    function dataftch() {
        console.log("called")
        const MyProfileTokenID = JSON.parse(localStorage.getItem("myid"));
        if (MyProfileTokenID !== null) {
            if (MyProfileTokenID.key !== "") {
                axios.get(`http://127.0.0.1:8000/faculty/${MyProfileTokenID.key}`, {
                    headers: {
                        'Authorization': `token ${MyProfileTokenID.token}`
                    }
                })
                    .then((res) => {
                        console.log(res.data)
                        setFaculty(res.data);
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    }


    return (
        <Context.Provider value={{fethdata,setfethdata, Faculty ,setFaculty,dataftch,searchterm,setsearchterm}}>
            {prop.children}
        </Context.Provider>
    )

}

export default Store;
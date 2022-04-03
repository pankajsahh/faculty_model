import axios from "axios";
import { useContext, useEffect,useState, useRef } from "react";
import FacultySearchItem from "../SearchItem";
import Context from '../../../components/context/Context.js'
const DataFiltered =()=>{
    const {searchterm} =useContext(Context)
    const [fethdata,setfethdata] = useState([])
     function AllFacultyFetch () { 
        const user = JSON.parse(localStorage.getItem("myid")) 
        if(user!=null){
            axios.get(`http://127.0.0.1:8000/faculty/`, {
                headers: {
                    'Authorization': `token ${user.token}`
                }
            }).then(resp => {
                const seachresult =  resp.data
                let filtered = seachresult.filter(a => a.Name.startsWith(searchterm)||a.Department.startsWith(searchterm));
                console.log(filtered,"hey  i ama filtered");
                setfethdata(filtered)
    
            }).catch(err => { console.log(err) })
    
        }
        

    }
    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = AllFacultyFetch;

    
    useEffect(()=>{
      console.log("called all featch daata")
        Book_Featch_reference.current();
        // dataftch();
    },[searchterm])
    return(
        <>
            {fethdata.map(({id,...otherprops})=>(
                <FacultySearchItem key={id} {...otherprops} />
            ))}
        </>
    )
}
export default DataFiltered;
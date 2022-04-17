import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import FacultySearchItem from "../SearchItem";
import Context from '../../../components/context/Context.js'
import SearchEngine from "../../SearchEngine/SearchEngine";
const DataFiltered =()=>{
    const {fethdata,setfethdata,searchterm} =useContext(Context)
   
    
     function AllFacultyFetch () { 
        const user = JSON.parse(localStorage.getItem("myid")) 
        if(user!==null){
         axios.get(`http://127.0.0.1:8000/faculty/`, {
            headers: {
                'Authorization': `token ${user.token}`
            }
        }).then(resp => {
            const seachresult =  resp.data  
            console.log(resp.data,"dataaaaaaaaa")
            let filtered = seachresult.filter(a => a.Name.startsWith(searchterm)||a.Department.startsWith(searchterm));
            setfethdata(filtered)
        }).catch(err => { console.log(err) })
    }

    }
    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = AllFacultyFetch;

    useEffect(()=>{
        Book_Featch_reference.current();
    },[searchterm])
    useEffect(()=>{
    
    },[])
    return(
        <>
        <div className="top_search_nav">
                    <SearchEngine />
                </div>
                
            {
            fethdata.map(({id,...otherprops})=>(
                <FacultySearchItem key={id} {...otherprops} />
            ))}
        </>
    )
}
export default DataFiltered;
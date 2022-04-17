import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import Context from "../../context/Context";
import ConfrenceSearchItem from "../confrencefilteritem";
import ConfrenceOption from "../FilterOptions/confrenceOptions";

const Confrencefilter = () => {
   const {filterconfrence,afterfilterconfrence,setafterfilterconfrence}= useContext(Context)


    function AllconfrenceFetch () { 
        const user = JSON.parse(localStorage.getItem("myid")) 
        if(user!==null){
         axios.get(`http://127.0.0.1:8000/confrences/`, {
            headers: {
                'Authorization': `token ${user.token}`
            }
        }).then(resp => {
            let seachresult =  resp.data  
            console.log(seachresult,filterconfrence)
            
            if(filterconfrence.Book_title!==""){
                seachresult=seachresult.filter(a => a.Organizer.startsWith(filterconfrence.Organizer));  
            }
            if(filterconfrence.Year!==""){
                seachresult=seachresult.filter(a=>a.Year.startsWith(filterconfrence.Year));
            }
            if(filterconfrence.Proceeding!==""){
                seachresult=seachresult.filter(a => a.Proceeding.toString() === filterconfrence.Proceeding)
            }
            if(filterconfrence.Co_Author!==""){
                seachresult=seachresult.filter(a => a.Co_Author.startsWith(filterconfrence.Co_Author))
            }
            setafterfilterconfrence(seachresult);
        }).catch(err => { console.log(err) })
    }
    }
    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = AllconfrenceFetch;

    useEffect(()=>{
        Book_Featch_reference.current();
    },[filterconfrence])
    useEffect(()=>{
    
    },[])


  return (
    <>
      <div className="top_search_nav">
        <ConfrenceOption />
      </div>
      {
            afterfilterconfrence.map(({ id ,...otherprops})=>(
                <ConfrenceSearchItem key={id} {...otherprops} />
            ))}
    </>
  );
};


export default Confrencefilter;

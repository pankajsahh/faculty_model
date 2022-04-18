import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import Context from "../../context/Context";
import JournalOption from "../FilterOptions/journalsOptions";
import JournalSearchItem from "../journalfilteritem";

const JournalFilter = () => {
   const {filterjournal,
    afterfilterjournal, setafterfilterjournal,setsearchnavcolor}= useContext(Context)

    function AllconfrenceFetch () { 
        setsearchnavcolor("journal");
        const user = JSON.parse(localStorage.getItem("myid")) 
        if(user!==null){
         axios.get(`http://127.0.0.1:8000/journals/`, {
            headers: {
                'Authorization': `token ${user.token}`
            }
        }).then(resp => {
            let seachresult =  resp.data  
            console.log(seachresult,filterjournal)
    //         Co_Author: "",
    // Indexing: "",
    // Paper_title: "",
    // Publisher: "",
    // Volume: "",
    // Year: "",
   
            if(filterjournal.Paper_title!==""){
                seachresult=seachresult.filter(a => a.Paper_title.startsWith(filterjournal.Paper_title));  
            }
            if(filterjournal.Year!==""){
                seachresult=seachresult.filter(a=>a.Year.startsWith(filterjournal.Year));
            }
            if(filterjournal.Publisher!==""){
                seachresult=seachresult.filter(a => a.Publisher.startsWith(filterjournal.Publisher))
            }
            if(filterjournal.Co_Author!==""){
                seachresult=seachresult.filter(a => a.Co_Author.startsWith(filterjournal.Co_Author))
            }
            setafterfilterjournal(seachresult);
        }).catch(err => { console.log(err) })
    }
    }
    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = AllconfrenceFetch;

    useEffect(()=>{
        Book_Featch_reference.current();
    },[filterjournal])
    useEffect(()=>{
    
    },[])

    console.log(afterfilterjournal ,"journal data testing");
  return (
    <>
      <div className="top_search_nav">
        <JournalOption />
      </div>
            {
           afterfilterjournal.map(({ id ,...otherprops})=>(
                <JournalSearchItem key={id} {...otherprops} />
            ))}
    </>
  );
};




export default JournalFilter;

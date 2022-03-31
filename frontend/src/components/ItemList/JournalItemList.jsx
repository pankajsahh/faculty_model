import { useContext, useEffect, useRef } from "react";
import Context from "../context/Context.js";
import JournalItem from "../ItemForUpdate/JournalItem.jsx";


const JournalList=()=>{
    ///Journal publication will have all Journal data of user of id storedin local storage////
    const {Faculty,dataftch} = useContext(Context)

    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = dataftch;

    
    useEffect(()=>{
      console.log("called update")
        Book_Featch_reference.current();
        // dataftch();
    },[])

    return(
        <>
        <div className="Journallisterror">
            <h2>Journal List</h2>
        
            <div className="Journals">
            {
                Faculty.JournalPublication
                .map(({ id, ...otherItemProps }) => (
                  <JournalItem id={id} key={id} {...otherItemProps} />
                ))
            }
            </div>
            </div>
        </>
    )
}
export default JournalList;
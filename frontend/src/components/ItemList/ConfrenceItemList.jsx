import { useContext, useEffect, useRef } from "react";
import Context from "../context/Context.js";
import ConfrenceItem from "../ItemForUpdate/ConfrenceItem.jsx";


const Confrenceitemslist=()=>{
    ///book publication will have all book data of user of id storedin local storage////
    const {Faculty,dataftch} = useContext(Context);

    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = dataftch;

    
    useEffect(()=>{
      console.log("called update")
        Book_Featch_reference.current();
        // dataftch();
    },[])

    return(
        <>
        <div className="Confrencelisterror">
            <h2>Confrence List</h2>
        
            <div className="Confrence">
            {
                Faculty.ConfrencePublication
                .map(({ id, ...otherItemProps }) => (
                  <ConfrenceItem id={id} key={id} {...otherItemProps} />
                ))
            }
            </div>
            </div>
        </>
    )
}
export default Confrenceitemslist;
import { useContext } from "react";
import Context from "../context/Context.js";
import JournalItem from "../ItemForUpdate/JournalItem.jsx";


const JournalList=()=>{
    ///Journal publication will have all Journal data of user of id storedin local storage////
    const {Faculty} = useContext(Context)


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
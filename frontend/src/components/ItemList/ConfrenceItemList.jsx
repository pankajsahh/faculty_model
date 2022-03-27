import { useContext } from "react";
import Context from "../context/Context.js";
import ConfrenceItem from "../ItemForUpdate/ConfrenceItem.jsx";


const Confrenceitemslist=()=>{
    ///book publication will have all book data of user of id storedin local storage////
    const {Faculty} = useContext(Context);


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
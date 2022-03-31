import { useContext, useEffect, useRef } from "react";
import Context from "../context/Context.js";
import BookItem from "../ItemForUpdate/BookItem.jsx";


const BookList=()=>{
    ///book publication will have all book data of user of id storedin local storage////
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
        <div className="Booklisterror">
            <h2>Book List</h2>
        
            <div className="books">
            {
                Faculty.BookPublication
                .map(({ id, ...otherItemProps }) => (
                  <BookItem key={id} {...otherItemProps} id={id} />
                ))
            }
            </div>
            </div>
        </>
    )
}
export default BookList;
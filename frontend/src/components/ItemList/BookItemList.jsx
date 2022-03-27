import { useContext } from "react";
import Context from "../context/Context.js";
import BookItem from "../ItemForUpdate/BookItem.jsx";


const BookList=()=>{
    ///book publication will have all book data of user of id storedin local storage////
    const {Faculty} = useContext(Context)


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
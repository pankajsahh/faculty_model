import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import Context from "../../context/Context";
import BookSearchItem from "../bookfilteredItem";
import BookOption from "../FilterOptions/bookOptions";

const BookFilter = () => {
   const {filterBook,afterfilterbooks,setafterfilterbooks}= useContext(Context)


    function AllBookFetch () { 
        const user = JSON.parse(localStorage.getItem("myid")) 
        if(user!==null){
         axios.get(`http://127.0.0.1:8000/books/`, {
            headers: {
                'Authorization': `token ${user.token}`
            }
        }).then(resp => {
            let seachresult =  resp.data  
            
            if(filterBook.Book_title!==""){
                seachresult=seachresult.filter(a => a.Book_title.startsWith(filterBook.Book_title));  
            }
            if(filterBook.Year!==""){
                seachresult=seachresult.filter(a=>a.Year.startsWith(filterBook.Year));
            }
            if(filterBook.Publisher!==""){
                seachresult=seachresult.filter(a => a.Publisher.startsWith(filterBook.Publisher))
            }
            if(filterBook.Co_Author!==""){
                seachresult=seachresult.filter(a => a.Co_Author.startsWith(filterBook.Co_Author))
            }
            setafterfilterbooks(seachresult);
            
            console.log(seachresult)
        }).catch(err => { console.log(err) })
    }
    }
    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = AllBookFetch;

    useEffect(()=>{
        Book_Featch_reference.current();
    },[filterBook])
    useEffect(()=>{
    
    },[])


  return (
    <>
      <div className="top_search_nav">
        <BookOption />
      </div>
      {
            afterfilterbooks.map(({ id ,...otherprops})=>(
                <BookSearchItem key= {id} {...otherprops} />
            ))}
    </>
  );
};

export default BookFilter;

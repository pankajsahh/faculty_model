import Context from "./Context.js";
import { useState  } from "react";

const Store = (prop) => {

    const Myprofile = {
        Name: "not found", Department: "Department not found", Designation: "Designation not found"
    }
    const [Faculty, setFaculty] = useState(Myprofile);
    // get id and access_token from localStorage
    //for featching data from local host ( id and token )
    return (
        <Context.Provider value={{ Faculty ,setFaculty}}>
            {prop.children}
        </Context.Provider>
    )

}

export default Store;
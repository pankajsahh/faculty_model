import React, { useContext, useEffect, useRef } from "react";
import LeftNav from "../../components/LeftNav/LeftNav";
import "./UpdatePage.css";
import { Outlet } from "react-router-dom";
import Context from "../../components/context/Context";

const UpdatePage = () => {

  const {dataftch} = useContext(Context)

    const Book_Featch_reference = useRef();
    Book_Featch_reference.current = dataftch;

    
    useEffect(()=>{
      console.log("called update")
        Book_Featch_reference.current();
        // dataftch();
    },[])
  return (
    <div className="UpdatePage">
      <div>
        <LeftNav />
      </div>
      <Outlet />
    </div>
  );
};

export default UpdatePage;

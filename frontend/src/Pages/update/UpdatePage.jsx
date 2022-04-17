import React from "react";
import LeftNav from "../../components/LeftNav/LeftNav";
import "./UpdatePage.css";
import { Navigate, Outlet } from "react-router-dom";

const UpdatePage = () => {
  if(localStorage.getItem("myid")===null){
    return <Navigate to="/login" />;
}
 
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

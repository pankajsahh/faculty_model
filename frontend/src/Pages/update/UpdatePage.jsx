import React from "react";
import LeftNav from "../../components/LeftNav/LeftNav";
import "./UpdatePage.css";
import { Outlet } from "react-router-dom";

const UpdatePage = () => {

 
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

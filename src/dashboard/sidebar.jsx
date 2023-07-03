import React from "react";
import "../styles/dashboard.css";
import MenuBar from "./menubar";
import { Dropdown } from "react-bootstrap";

function SideBar(props) {
  return (
    <>
    <div>
        <MenuBar />
    </div>
      <div className="Sidebar">
       <div className="d-flex">
        <div className="">
            <h3>Car Specific details </h3>
            <div>
          
            </div>
        </div>
       </div>
      </div>
    </>
  );
}

export default SideBar;

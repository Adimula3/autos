import React from "react";
import "../styles/dashboard.css";
import agent1 from "../assets/agent-demo.jpeg";

function MenuBar(props) {
  return (
    <div className="Menubar d-flex">
      <div>
        <i class="fa-solid fa-bell"></i>
      </div>
      <div>
        <i class="fa-solid fa-envelope"></i>
      </div>

      <img src={agent1} className="user" alt="" />
      <div className="user-details">
        <p>Olayinka </p>
        <span>Marketing Administrator</span>
      </div>
    </div>
  );
}

export default MenuBar;

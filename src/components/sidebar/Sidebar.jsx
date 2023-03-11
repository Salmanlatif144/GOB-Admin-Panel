import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../imgs/logo.png";

import { Sidebardata } from "../../Data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [selected, setselected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Sidebar">
      <div className="logo">
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        />
        <img src={Logo} className="pic" />
        <span>GEB</span>
      </div>

      <div className="menu">
        {Sidebardata.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItems active" : "menuItems"}
              key={index}
              onClick={() => setselected(index)}
            >
              <img src={item.icon} />

              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;

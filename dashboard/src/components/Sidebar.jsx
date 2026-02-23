import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>

      <div className="top-section">
        <h3 className="logo">{collapsed ? '' : "Hospital MS"}</h3>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          ☰
        </button>
      </div>

      <ul className="nav-links">
        <li> <span>Home</span></li>
        <li> <span>About Us</span></li>
        <li> <span>Contact Us</span></li>
        <li> <span>Settings</span></li>
      </ul>

      <div className="logout">
         <span>Logout</span>
      </div>

    </div>
  );
};

export default Sidebar;
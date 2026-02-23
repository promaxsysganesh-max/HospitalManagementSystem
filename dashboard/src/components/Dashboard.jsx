import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (

    <div className="dashboard-container">
      
      <h2 className="dashboard-title">Promaxsys HealthCare</h2>

      <div className="cards-grid">

        <div className="card">
          <h3>Doctor</h3>
          <a href="#" className="count" >Login</a>
        </div>

        <div className="card">
          <h3>Patient</h3>
          <a href="#" className="count" >Login</a>
        </div>

        <div className="card">
          <h3>HoD</h3>
          <a href="#" className="count" >Login</a>
        </div>

        <div className="card">
          <h3>FrontDesk</h3>
          <a href="#" className="count" >Login</a>
        </div>

        <div className="card">
          <h3>Lab Technician</h3>
          <a href="#" className="count" >Login</a>
        </div>

        <div className="card">
          <h3>Accountant</h3>
          <a href="#" className="count" >Login</a>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
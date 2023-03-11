import React from "react";
import "./Cards.css";

function Cards(props) {
  const totalEmployees = 366;
  const assignedEmployees = 20;
  const unemployedEmployees = totalEmployees - assignedEmployees;

  return (
    <div className="main_container">
      <div className="card">
        <img src={require("../../imgs/total.png")} className="icon" />
        <div>
          <h1 className="numbers">{totalEmployees}</h1>
        </div>
        <p>Total Employees</p>
      </div>
      <div className="card">
        <img src={require("../../imgs/ass.png")} className="icon" />
        <h1 className="numbers">{assignedEmployees}</h1>
        <p>Assigned Employees</p>
      </div>
      <div className="card">
        <img src={require("../../imgs/un.png")} className="icon" />
        <h1 className="numbers">{unemployedEmployees}</h1>
        <p>Unassigned Employees</p>
      </div>
    </div>
  );
}

export default Cards;

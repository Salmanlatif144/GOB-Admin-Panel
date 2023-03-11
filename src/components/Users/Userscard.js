import React from "react";
import "./UsersCard.css";

export default function Userscard() {
  const totalEmployees = 366;
  const Siteworkers = 20;
  const Other = totalEmployees - Siteworkers;

  return (
    <div>
      <div className="main_container">
        <div className="card">
          <img src={require("../../imgs/total.png")} className="icon" />
          <div>
            <h1 className="numbers">{totalEmployees}</h1>
          </div>
          <p>Total Employees</p>
        </div>
        <div className="card">
          <img src={require("../../imgs/site.png")} className="icon" />
          <h1 className="numbers">{Siteworkers}</h1>
          <p>Siteworkers</p>
        </div>
        <div className="card">
          <img src={require("../../imgs/other.png")} className="icon" />
          <h1 className="numbers">{Other}</h1>
          <p>Others</p>
        </div>
        <div className="card">
          <img src={require("../../imgs/other.png")} className="icon" />
          <h1 className="numbers">{Other}</h1>
          <p>Others</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Cards from "../Cards/Cards";
import Charts from "../Charts/Charts";
import "./MainDash.css";

function MainDash(props) {
  return (
    <div className="MainDash">
      <h1 style={{ borderBottom: "2px solid #bbfaca" }}>Dashboard</h1>
      <Cards />
      <Charts />
    </div>
  );
}

export default MainDash;

import React from "react";
import Userscard from "./Userscard";
import "./MainUsers.css";
import Tables from "./Tables";

export default function MainUsers() {
  return (
    <div className="userscreen">
      <div className="header">
        <h1>Users</h1>
      </div>
      <Userscard />
      <Tables />
    </div>
  );
}

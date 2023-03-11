import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import "./Tables.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  );
}

export default function Tables() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const [users, setusers] = useState([
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      id: "#12324",
      date: "12-4-8",
      designation: "Site worker",
    },
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      id: "#12324",
      date: "12-4-8",
      designation: "Site worker",
    },
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      id: "#12324",
      date: "12-4-8",
      designation: "Site worker",
    },
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      id: "#12324",
      date: "12-4-8",
      designation: "Site worker",
    },
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      id: "#12324",
      date: "12-4-8",
      designation: "Site worker",
    },
  ]);
  function togglePopup() {
    setShowPopup(!showPopup);
  }
  function togglePopup2() {
    setShowPopup2(!showPopup2);
  }

  return (
    <div className="Main">
      <div className="top-container">
        <div>
          <h4>All Users</h4>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="text" placeholder="Search Users" className="input" />
        </div>
      </div>
      <table>
        <thead>
          <th>Nmae</th>
          <th>id</th>
          <th>Date Joined</th>
          <th>Designation</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td className="hello">
                {" "}
                <div className="name-container">
                  <img src={require("../../imgs/dpp.jpg")} className="icon" />
                  <div className="name-container2">
                    <p className="name">{user.name}</p>
                    <p className="email">{user.email} </p>
                  </div>
                </div>
              </td>
              <td>{user.id}</td>
              <td>{user.date}</td>
              <td>{user.designation}</td>
              <td>
                <div className="button-container">
                  <img
                    src={require("../../imgs/view.png")}
                    className="icon"
                    onClick={togglePopup2}
                  />

                  {showPopup2 && (
                    <Popup className="viewpopup">
                      <img src={require("../../imgs/dpp.jpg")} className="dp" />
                      <h1>Muhammad Salman Latif</h1>
                      <div className="popdiv">
                        <div className="smallpopdiv">
                          <div className="smalldiv">
                            <label className="poplabel">Email:</label>
                            <br />
                            <p>Salmanwains463@gmail.com</p>
                          </div>
                          <div className="smalldiv">
                            <label className="poplabel">Contact:</label>
                            <br />
                            <p>123456789</p>
                          </div>
                        </div>

                        <div className="smallpopdiv">
                          <div className="smalldiv">
                            <label className="poplabel">Designation:</label>
                            <br />
                            <p>Site Worker</p>
                          </div>
                          <div className="smalldiv">
                            <label className="poplabel">Address:</label>
                            <br />
                            <p>Aloo mAtara Gajrein</p>
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: "center" }}>
                        <button onClick={togglePopup2}>Okay</button>
                      </div>
                    </Popup>
                  )}

                  <img
                    src={require("../../imgs/pencil.png")}
                    //   className="icon"
                  />
                  <img
                    src={require("../../imgs/disposal.png")}
                    className="icon"
                    onClick={togglePopup}
                  />
                  {showPopup && (
                    <Popup>
                      <h1>Delete User</h1>
                      <p>You want to Delete User.</p>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <button onClick={togglePopup}>Yes</button>
                        <button className="red" onClick={togglePopup}>
                          No
                        </button>
                      </div>
                    </Popup>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

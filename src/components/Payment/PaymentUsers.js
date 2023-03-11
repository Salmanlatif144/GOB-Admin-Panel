import React, { useState } from "react";
import "./PaymnetUsers.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  );
}

export default function PaymentUsers(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [users, setusers] = useState([
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      shifts: 12,
      hours: 128,
      Wage_Per_Hour: 12,
      total_Payment: 144,
    },
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      shifts: 12,
      hours: 128,
      Wage_Per_Hour: 12,
      total_Payment: 144,
    },
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      shifts: 12,
      hours: 128,
      Wage_Per_Hour: 12,
      total_Payment: 144,
    },
    {
      name: "Salman Latif",
      email: "salmanwains@gmail.com",
      shifts: 12,
      hours: 128,
      Wage_Per_Hour: 12,
      total_Payment: 144,
    },
  ]);
  function togglePopup() {
    setShowPopup(!showPopup);
  }
  function togglePopup2() {
    setShowPopup2(!showPopup2);
  }

  return (
    <div className="cont">
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
            <th>Shifts</th>
            <th>Hours</th>
            <th>Wage per Hour</th>
            <th>Total Payment</th>

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
                <td>{user.shifts}</td>
                <td>{user.hours}</td>
                <td>{user.Wage_Per_Hour}</td>
                <td>{user.total_Payment}</td>

                <td>
                  <div className="button-container">
                    <img
                      src={require("../../imgs/view.png")}
                      className="icon"
                      onClick={togglePopup2}
                    />

                    {showPopup2 && (
                      <Popup className="viewpopup">
                        <img
                          src={require("../../imgs/dpp.jpg")}
                          className="dp"
                        />
                        <h1>Muhammad Salman Latif</h1>
                        <div className="popdiv">
                          <div className="smallpopdiv">
                            <div className="smalldiv">
                              <label className="poplabel">Shifts:</label>
                              <br />
                              <p>12</p>
                            </div>
                            <div className="smalldiv">
                              <label className="poplabel">Hours:</label>
                              <br />
                              <p>122</p>
                            </div>
                          </div>

                          <div className="smallpopdiv">
                            <div className="smalldiv">
                              <label className="poplabel">Wage per Hour:</label>
                              <br />
                              <p>24</p>
                            </div>
                            <div className="smalldiv">
                              <label className="poplabel">Total Payment:</label>
                              <br />
                              <p>1454</p>
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
                        <h1>Delete Payment</h1>
                        <p>You want to Delete payment .</p>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
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
    </div>
  );
}

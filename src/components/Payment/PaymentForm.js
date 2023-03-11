import React, { useState } from "react";
import "./PaymentForm.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  );
}

export default function PaymentForm() {
  const [selectedValue, setSelectedValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [users, setusers] = useState([
    {
      name: "Salman Latif",
      hourly_wage: 15,
      total_hours: 10,
    },
    {
      name: "Saad",
      hourly_wage: 15,
      total_hours: 10,
    },
    {
      name: "Mustafa",
      hourly_wage: 15,
      total_hours: 10,
    },
  ]);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  //   const totalpayment = hourly_wage * total_hours;

  return (
    <div className="Paymentform">
      <div className="main">
        <h1>Calculate Payment</h1>
        <div>
          <label>Choose User:</label> <br />
          <select value={selectedValue} className="select">
            {users.map((user) => (
              <option value="">{user.name}</option>
            ))}
          </select>
        </div>
        <div className="small_cont">
          <div>
            <label>Hourly Wage :</label> <br />
            <input type="number" placeholder="Enter Hourly wage" />
          </div>
          <div>
            <label>Total Hours :</label> <br />
            <input type="number" placeholder="Enter Total Hours" />
          </div>
        </div>
        <div className="small_cont">
          <div>
            <div>
              <label>Total Payment: :</label> <br />
              <input type="number" placeholder="Your Total Payment is" />
            </div>
            <div className="btncont">
              <button onClick={togglePopup} className="reset">
                Reset
              </button>
              <button onClick={togglePopup}>Pay</button>
              {showPopup && (
                <Popup>
                  <h1>Confirm Payment</h1>
                  <p>You want to pay .</p>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button onClick={togglePopup}>Yes</button>
                    <button className="red" onClick={togglePopup}>
                      No
                    </button>
                  </div>
                </Popup>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

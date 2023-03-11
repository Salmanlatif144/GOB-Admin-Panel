import React, { useState } from "react";
import "./Adduser.css";

export default function Adduser() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [ImageSrc, setImageSrc] = useState(require("../../imgs/upload.png"));

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // TODO: submit form data
  };

  return (
    <div className="add_user_main">
      <form>
        <h1>Enter Users Details</h1>
        <div className="first_cont">
          <div>
            <label>Full Name</label> <br />
            <input
              type="text"
              placeholder="Enter User's Full Name"
              required
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Contact</label> <br />
            <input
              type="text"
              placeholder="Enter User's Mobile Number "
              required
              // pattern="^[(][0-9]{3}[)]\s[0-9]{3}-[0-9]{4}$"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label>Email</label> <br />
          <input
            className="email_input"
            type="email"
            placeholder="Enter User's Email"
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="first_cont">
          <div>
            <label>Designation</label> <br />
            <input
              type="text"
              placeholder="Enter User's Designation"
              required
              value={Designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div>
            <label>Address</label> <br />
            <input
              type="text"
              placeholder="Enter User's Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="first_cont">
          <div>
            <label>Password</label> <br />
            <input
              type="password"
              placeholder="Enter User's Password"
              required
              value={Password}
              pattern="^(?=.*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9]).{8,}$"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password</label> <br />
            <input
              type="password"
              placeholder="Please Confirm Password"
              pattern="^(?=.*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9]).{8,}$"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="first_cont">
          <div className="img_container">
            <img src={ImageSrc} alt="Profile" className="image" />
            <input
              className="imggg"
              type="file"
              accept=".jpg, .jpeg, .png"
              placeholder="Choose picture"
              onChange={handleImageUpload}
            />
          </div>
          <div className="button_cont">
            <button className="accept" type="submit">
              Add User
            </button>
            <button className="reject" type="reset">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

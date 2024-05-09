import { useState } from "react";
import axios from "axios";

function Signup({ onToggle }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null); 

  const registerUser = async () => {
    try {
      if (password == confirmPassword) {
        const data = {
          first_name: firstname,
          last_name: lastname,
          email: email,
          password: password,
        };

        const res = await axios.post(
          "http://127.0.0.1:8000/api/register",
          data
        );
        if (res.status === 200) {
          alert("good!")
        }
      } else {
        setError("Passwords do not match.");
      }
    } catch (error) {
      setError("Error, try again later!");
    }
  };
  return (
    <div className="flex bg-secondary main-container">
      <div className="flex column center signup greeting-section">
        <div className="flex center column greeting between">
          <h1>Welcome To Investify</h1>
          <p>Register with your personal details to use all of site featuers</p>
          <button className="auth-button" onClick={() => onToggle()}>
            Login
          </button>
        </div>
      </div>
      <div className="flex column center auth-section">
        <div className="flex column between center  auth-form">
          <h1>Sign Up</h1>
          <input type="email"
            className="auth-inputs"
            placeholder="First Name"
            onChange={(e) => {
              setFirstname(e.target.value);
            }} required 
          ></input>
                    <input type="email"
            className="auth-inputs"
            placeholder="Last Name"
            onChange={(e) => {
              setLastname(e.target.value);
            }} required 
          ></input>
          <input
            className="auth-inputs"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            className="auth-inputs"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <input
            type="password"
            className="auth-inputs"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          ></input>
          <button
            className="auth-button"
            onClick={() => {
              registerUser();
            }}
          >
            Sign Up
          </button>
          {error && <div className="error-message">{error}</div>}
          
        </div>
      </div>
    </div>
  );
}

export default Signup;

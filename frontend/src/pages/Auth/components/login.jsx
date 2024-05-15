import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUSer = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const res = await axios.post("http://127.0.0.1:8000/api/login", data);
      if (res.data.status == 200) {
        localStorage.setItem("token", res.data.authorisation.token);
        if (res.data.user_role == "investor") {
          navigate("/investor");
        } else if (res.data.user_role == "entrepreneur") {
          navigate("/user");
        } else if (res.data.user_role == "admin") {
          navigate("/admin");
        }
      }
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div>
      <div className="flex bg-secondary main-container">
        <div className="flex column center auth-section">
          <div className="flex column between center  auth-form">
            <h1>Login</h1>
            <div className="flex center gap-20 column full-w">
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
            </div>
            <button
              className="auth-button"
              onClick={() => {
                loginUSer();
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="flex column center login greeting-section">
          <div className="flex center column greeting between">
            <h1>Welcome Back</h1>
            <p>Log in with your personal details to use all of site featuers</p>
            <button className="auth-button" onClick={() => onToggle()}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

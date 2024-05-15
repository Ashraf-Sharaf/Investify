import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import "./home.css";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const sendEmail = async () => {
    try {
      const data = {
        email: email,
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/invite_investor",
        data,
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      if (res.status == 200) {
        setError("Sent Successfully");
      } else {
        setError("Error while sending");
      }
    } catch (error) {}
  };

  return (
    <div className="flex gap-20 relative">
      <div className="user-sidebar admin flex column padding-20 gap-20">
        <div className="landing-nav-logo flex center bottom-border padding-10">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="user-sidebar-navigations flex column gap-10 ">
          <div
            className="flex gap-10 user-sidebar-navigation align page-shown"
            onClick={() => {}}
          >
            <HomeIcon />
            <h3>Home</h3>
          </div>
        </div>
        <div className="user-sidebar-logout flex between align">
          <h3>Logout</h3>
          <LogoutIcon
            className="logout-icon"
            onClick={() => {
              logout();
            }}
          />
        </div>
      </div>
      <div className="invite-investor-container padding-10 flex column gap-20">
        <h1>Invite Investor</h1>
        <div className="invite-investor-inputs flex gap-20 align">
          <input
            placeholder="Investor Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              sendEmail();
            }}
          >
            Send Invite
          </button>
        </div>
      </div>
      {error && (
        <div className="error-message flex center column gap-20">
          {error}
          <button
            className="error-messge-button"
            onClick={() => {
              setError(null);
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
export default Home;

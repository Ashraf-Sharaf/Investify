import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };

  return (
    <div className="flex gap-20">
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
          <input placeholder="Investor Email"></input>
          <button>Send Invite</button>
        </div>
      </div>
    </div>
  );
}
export default Home;

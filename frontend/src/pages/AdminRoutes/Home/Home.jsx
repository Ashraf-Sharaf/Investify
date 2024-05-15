import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
function Home() {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };

  return (
    <div className="flex">
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
    </div>
  );
}
export default Home;

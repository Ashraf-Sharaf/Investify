import "../../sidebar.css";
import "./schedule.css";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";

function Schedule() {
    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.setItem("token", null);
    }
    const data = [
        { col1: 'Row 1 Col 1', col2: 'Row 1 Col 2', col3: 'Row 1 Col 3', col4: 'Row 1 Col 4' },
        { col1: 'Row 2 Col 1', col2: 'Row 2 Col 2', col3: 'Row 2 Col 3', col4: 'Row 2 Col 4' },
        { col1: 'Row 3 Col 1', col2: 'Row 3 Col 2', col3: 'Row 3 Col 3', col4: 'Row 3 Col 4' },
      ];
    

  return (
    <div className="flex">
      <div className="user-sidebar flex column padding-20 gap-20">
        <div className="landing-nav-logo flex center bottom-border padding-10">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="user-sidebar-navigations flex column gap-10 ">
          <div
            className="flex gap-10 user-sidebar-navigation align "
            onClick={() => {}}
          >
            <HomeIcon />
            <h3>Home</h3>
          </div>
          <div
            className="flex gap-10 user-sidebar-navigation align"
            onClick={() => {}}
          >
            <ReviewsIcon />
            <h3>Reviews</h3>
          </div>
          <div
            className="flex gap-10 user-sidebar-navigation align"
            onClick={() => {
              navigate("/user/chat_bot");
            }}
          >
            <ComputerIcon />
            <h3>AI</h3>
          </div>
          <div
            className="flex gap-10 user-sidebar-navigation align page-shown"
            onClick={() => {}}
          >
            <EventAvailableIcon />
            <h3>Schedule</h3>
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
      <div className="schedule-container padding-10 ">    
      <table>
      <thead>
        <tr>
          <th>Investor Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Meeting Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
    </div>
  );
}
export default Schedule;

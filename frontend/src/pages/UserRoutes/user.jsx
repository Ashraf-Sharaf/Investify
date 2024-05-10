import "./userr.css";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function User() {
  return (
    <div className="user-container flex">
      <div className="user-sidebar flex column padding-20 gap-20">
        <div className="landing-nav-logo flex center bottom-border padding-10">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="user-sidebar-navigations flex column gap-10 ">
          <div className="flex gap-10 user-sidebar-navigation align" onClick={()=>{}}>
            <HomeIcon />
            <h3>Home</h3>
          </div>
          <div className="flex gap-10 user-sidebar-navigation align" onClick={()=>{}}>
            <ComputerIcon />
            <h3>AI</h3>
          </div>
          <div className="flex gap-10 user-sidebar-navigation align " onClick={()=>{}}>
            <EmojiEventsIcon />
            <h3>Events</h3>
          </div>
          <div className="flex gap-10 user-sidebar-navigation align" onClick={()=>{}}>
            <EventAvailableIcon/>
            <h3>Schedule</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;

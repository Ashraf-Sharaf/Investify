import "../../sidebar.css";
import "./home.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useEffect } from "react";

function Home() {

  const [mybusiness,setMybusiness]=useState([]);

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };

  const getUserBusiness = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/my_business", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
       if (response.status === 200) {
        setMybusiness(response.data.businesses);
        console.log(response.data.businesses);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      alert("error",error)
    }
  };

  useEffect(() => {
    getUserBusiness();
  }, []);

  return (
    <div className="flex">
      <div className="user-sidebar flex column padding-20 gap-20">
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
          <div
            className="flex gap-10 user-sidebar-navigation align"
            onClick={() => {}}
          >
            <ReviewsIcon />
            <h3>Reviews</h3>
          </div>
          <div
            className="flex gap-10 user-sidebar-navigation align"
            onClick={() => {}}
          >
            <ComputerIcon />
            <h3>AI</h3>
          </div>
          <div
            className="flex gap-10 user-sidebar-navigation align "
            onClick={() => {}}
          >
            <EmojiEventsIcon />
            <h3>Events</h3>
          </div>
          <div
            className="flex gap-10 user-sidebar-navigation align"
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

      <div className="user-business felx column padding-10 ">
        <div className="user-business-title flex align padding-10">
          <h1>Business Overview</h1>
        </div>
        <div className="user-business-info flex column">
          <div className="user-business-info-container flex between padding-10 ">
            <div className="flex half-w column gap-20">
              <div className="user-business-info-input flex between center">
                <h3>Business Name</h3>
                <input type="text"></input>
              </div>
              <div className="user-business-info-input flex  between center">
                <h3>Location</h3>
                <input type="text"></input>
              </div>
              <div className="user-business-info-input flex between center">
                <h3>Industry</h3>
                <input type="text"></input>
              </div>
            </div>
            <div className="flex half-w column gap-20">
              <div className="user-business-info-input flex between center">
                <h3>Funding Needed</h3>
                <input type="text"></input>
              </div>
              <div className="user-business-info-input flex between center">
                <h3>Stake Offered</h3>
                <input type="text"></input>
              </div>
              <div className="user-business-info-input flex  between center">
                <h3>Valuation</h3>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div className="flex padding-10 user-business-info-input gap-20">
            <h3>Description</h3>
            <textarea rows="5"></textarea>
          </div>
        </div>

        <div className=" flex center padding-10">
          <button className="user-business-button">Update</button>
        </div>
      </div>
    </div>
  );
}
export default Home;

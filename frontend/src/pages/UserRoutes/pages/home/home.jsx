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
  
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [funding, setFunding] = useState("");
  const [stake, setStake] = useState("");
  const [valuation, setValuation] = useState("");
  const [description, setDescription] = useState("");
  const [mybusiness,setMybusiness]=useState([]);
  
  const [error, setError] = useState(null);

  
  const getUserBusiness = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/my_business", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        setMybusiness(response.data.business);
      }
    } catch (error) {
      setError("Error loading data");
    }
  };


  const editBusiness = async () => {
    try {

      const data = {
        name: name,
        industry: industry,
        location: location,
        description: description,
        funding_needed: funding,
        stake_offered: stake,
        valuation: valuation,
      };

      const response = await axios.post("http://127.0.0.1:8000/api/edit_business",data, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      console.log(response)
      if (response.status == 200) {
        setError(response.data.message);
      }else{
        setError("Error, try again later!");
      }
    } catch (error) {
      setError("Error, try again later!");
    }
  };
  
  
  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
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
              <div className="user-business-edit-info-input flex between center">
              <h3>Business Name</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  // placeholder={mybusiness.name}
                  required
                ></input>
              </div>
              <div className="user-business-edit-info-input flex  between center">
                <h3>Location</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  // placeholder={mybusiness.location}
                  required
                ></input>
              </div>
              <div className="user-business-edit-info-input flex between center">
                <h3>Industry</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setIndustry(e.target.value);
                  }}
                  // placeholder={mybusiness.industry}
                  required
                ></input>
              </div>
            </div>
            <div className="flex half-w column gap-20">
              <div className="user-business-edit-info-input flex between center">
                <h3>Funding Needed</h3>
                <input
                  type="numeric"
                  onChange={(e) => {
                    setFunding(e.target.value);
                  }}
                  // placeholder={mybusiness.funding_needed+" $"}
                  required
                ></input>
              </div>
              <div className="user-business-edit-info-input flex between center">
                <h3>Stake Offered</h3>
                <input
                  type="numeric"
                  onChange={(e) => {
                    setStake(e.target.value);
                  }}
                  // placeholder={mybusiness.stake_offered+" %"}
                  required
                ></input>
              </div>
              <div className="user-business-edit-info-input flex  between center">
                <h3>Valuation</h3>
                <input
                  type="numeric"
                  onChange={(e) => {
                    setValuation(e.target.value);
                  }}
                  // placeholder={mybusiness.valuation+" $"}
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="flex padding-10 user-business-info-input gap-20 full-w">
            <h3>Description</h3>
            <textarea
              rows="5"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              // placeholder={mybusiness.description}
              required
            ></textarea>
          </div>
        </div>

        <div className=" flex center padding-10">
          <button className="user-business-button" onClick={()=>{editBusiness()}}>Update</button>
        </div>
      </div>
      {error && <div className="error-message flex center column gap-20">{error}<button className="error-messge-button" onClick={()=>{setError(null)}}>Close</button></div>}
    </div>
  );
}
export default Home;

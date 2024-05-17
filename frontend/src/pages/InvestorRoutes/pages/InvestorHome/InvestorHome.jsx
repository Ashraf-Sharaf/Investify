import "./InvestorHome.css";
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import LeftCard from "./components/left-card";
import RightCard from "./components/right-card";
import Footer from "../../../Footer/Footer";
function Home() {
  const navigate = useNavigate();

  const [Businesses, setBusinesses] = useState([]);

  const loadBusinesses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/all_businesses",
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );

      setBusinesses(response.data.businesses);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  useEffect(() => {
    loadBusinesses();
  }, []);

  const logout = ()=>{
    window.localStorage.setItem("token",null);
    navigate('/');
  }

  return (
    <div>
      <div className="investor-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>

        <div className="flex gap-10">
        <button className="meeting-button" onClick={()=>{navigate('/investor/video')}}>Meetings</button>
          <button className="logout-nav-button" onClick={()=>{logout()}}>Logout</button>
        </div>
      </div>

      <div className="investor-businesses-container flex column gap-20">
        {Businesses?.map((business, index) => {
          if (index % 2 === 0) {
            return <LeftCard business={business} key={business.id} />;
          } else {
            return <RightCard business={business} key={business.id} />;
          }
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Home;

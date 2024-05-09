import "./InvestorHome.css";
import React ,{ useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import LeftCard from "./components/left-card";
import RightCard from "./components/right-card";
import Footer from "../../../Footer/Footer";
function Home() {
  const [Businesses, setBusinesses] = useState([]);

  const loadBusinesses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/all_businesses",       {
           headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });

      setBusinesses(response.data);
    } catch (error) {
      console.error("Error loading coin requests data:", error);
    }
  };
  useEffect(() => {
    loadBusinesses();
    
    console.log( window.localStorage.getItem("token"))
  }, []);












  return (
    <div>
      <div className="investor-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="search flex  center">
          <input
            type="text"
            placeholder="Search"
            className="search-input padding-20"
          ></input>
          <div className="search-icon flex center">
            <SearchIcon onClick={() => {}} />
          </div>
        </div>
        <div className="flex gap-10">
          <button className="logout-nav-button">Log out</button>
        </div>
      </div>

      <div className="investor-businesses-container flex column gap-20">
        <LeftCard />
        <RightCard/>
      </div>
        <Footer/>
    </div>
  );
}
export default Home;

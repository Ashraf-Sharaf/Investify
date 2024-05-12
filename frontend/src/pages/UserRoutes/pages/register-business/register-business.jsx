import "./register-business.css";
import Footer from "../../../Footer/Footer";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterBusiness() {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [funding, setFunding] = useState("");
  const [stake, setStake] = useState("");
  const [valuation, setValuation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const registerBusiness = async () => {
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

      const res = await axios.post("http://127.0.0.1:8000/api/add_business", data);
      if(res.status!=200){
        setError("Error, try again later!");
      }
    } catch (error) {
      setError("Error, try again later!");
    }
  };

  return (
    <div className="flex column gap-20">
      <div className="investor-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="flex gap-10">
          <button className="logout-nav-button" onClick={() => logout()}>
            Logout
          </button>
        </div>
      </div>

      <div className="flex center">
        <div className="register-business-container center flex column around">
          <h1>Register Your Business</h1>
          <div className="user-business-info-container flex between padding-10">
            <div className="flex half-w column gap-20">
              <div className="user-business-info-input flex between center">
                <h3>Business Name</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="user-business-info-input flex  between center">
                <h3>Location</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="user-business-info-input flex between center">
                <h3>Industry</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setIndustry(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>
            <div className="flex half-w column gap-20">
              <div className="user-business-info-input flex between center">
                <h3>Funding Needed</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setFunding(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="user-business-info-input flex between center">
                <h3>Stake Offered</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setStake(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="user-business-info-input flex  between center">
                <h3>Valuation</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setValuation(e.target.value);
                  }}
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
              required
            ></textarea>
          </div>
          <div className=" flex center padding-10">
            <button
              className="user-business-button"
              onClick={() => {
                registerBusiness();
                navigate("/user/home");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RegisterBusiness;

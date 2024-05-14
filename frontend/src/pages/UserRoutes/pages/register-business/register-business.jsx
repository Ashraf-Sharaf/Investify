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

  const [image, setImage] = useState("/images/null-state.PNG");
  const [imageData, setImageData] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [funding, setFunding] = useState("");
  const [stake, setStake] = useState("");
  const [valuation, setValuation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageData(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const registerBusiness = async () => {
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("industry", industry);
      data.append("location", location);
      data.append("description", description);
      data.append("funding", funding);
      data.append("stake", stake);
      data.append("valuation", valuation);
      // data.append('image', imageData);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/add_business",
        data,
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status !== 200) {
        setError("Error, Check your inputs");
      } else {
        navigate("/user/home");
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
          <div className="complete-profile-upload-image flex center gap-10 column  ">
            <div className="image-uploaded">
              <img src={image} alt="Upload your picture" />
            </div>
            <div>
              <label for="file-upload" class="custom-file-upload">
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                />
                Upload File
              </label>
            </div>
          </div>
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
                  type="numeric"
                  onChange={(e) => {
                    setFunding(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="user-business-info-input flex between center">
                <h3>Stake Offered</h3>
                <input
                  type="numeric"
                  onChange={(e) => {
                    setStake(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="user-business-info-input flex  between center">
                <h3>Valuation</h3>
                <input
                  type="numeric"
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
                // registerBusiness();
                navigate("/user/home");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
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
export default RegisterBusiness;

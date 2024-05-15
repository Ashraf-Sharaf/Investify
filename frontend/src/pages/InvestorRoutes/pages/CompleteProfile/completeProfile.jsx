import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./completeProfile.css";
import Footer from "../../../Footer/Footer";
import axios from "axios";

function CompleteProfile() {
  const navigate = useNavigate();

  const [image, setImage] = useState("/images/null-state.PNG");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage("/images/Investify.png");
    }
  };

  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };

  const registerUser = async () => {
    try {
      if (password == confirmPassword) {
        const data = {
          first_name: firstname,
          last_name: lastname,
          email: email,
          password: password,
          role_id: 2,
        };

        const res = await axios.post(
          "http://127.0.0.1:8000/api/register",
          data
        );
        if (res.status !== 200) {
          setError("Error, try again later!");
        } else {
          localStorage.setItem("token", res.data.authorisation.token);
          navigate("/investor");
        }
      } else {
        setError("Passwords do not match.");
      }
    } catch (error) {
      setError("Error, try again later!");
    }
  };

  return (
    <div className="investor-container flex column gap-20">
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
        <div className="complete-profile-form flex column center gap-20 padding-20">
          <h1>Complete Your Profile</h1>
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
          <div className="complete-profile-info flex gap-20 between">
            <div className="half-w  flex column  between gap-20">
              <div className="flex gap-20 between center">
                <h3>First Name</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>E-mail</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>Password</h3>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className="half-w  flex column  between gap-20">
              <div className="flex gap-20 between center">
                <h3>Last Name</h3>
                <input
                  type="text"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                ></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>Phone Number</h3>
                <input type="number" min="1"></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>Confirm Password</h3>
                <input
                  type="password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="investment-range flex  ">
            <h3>Investment Size Range</h3>

            <div className="flex gap-10 column">
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>1,000$ - 50,000$</label>
              </div>
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>50,000$ - 75,000$</label>
              </div>
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>75,000$ - 100,000$</label>
              </div>
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>Over 100,000$</label>
              </div>
            </div>
          </div>

          <div className="additional-info gap-10 flex column">
            <h3>Additonal Information</h3>
            <textarea rows="4"></textarea>
          </div>

          <button
            className="complete-profile-button"
            onClick={() => {
              registerUser();
            }}
          >
            Submit
          </button>
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
export default CompleteProfile;

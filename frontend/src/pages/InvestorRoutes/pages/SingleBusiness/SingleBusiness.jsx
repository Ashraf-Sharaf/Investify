import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../../../Footer/Footer";
import "./SingleBusiness.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";

function SingleBuisness() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [business, setBusiness] = useState([]);
  const [ownerFirst, setOwnerFirst] = useState("");
  const [ownerLast, setOwnerLast] = useState("");
  const [ownerID, setOwnerID] = useState("");
  const [error, setError] = useState(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  const { id } = useParams();

  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };

  const bookMeeting = async () => {
    try {
      const data = new FormData();
      data.append("date", date);
      data.append("start_time", time);
      data.append("link", link);
      data.append("user_id", ownerID);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/create_meeting",
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
        setPopup(false);
        setError("Booked Successfully");
      }
    } catch (error) {
      setError("Error, try again later!");
    }
  };
  const getBusiness = async () => {
    try {
      const data = new FormData();
      data.append("business_id", id);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/get_business",
        data,
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status !== 200) {
        setError("Error");
      } else {
        setBusiness(res.data.business);
        setOwnerFirst(res.data.owner_first_name);
        setOwnerLast(res.data.owner_last_name);
        setOwnerID(res.data.business.entrepreneur_id);
      }
    } catch (error) {
      setError("Error, try again later!");
    }
  };

  useEffect(() => {
    getBusiness();
  }, []);

  return (
    <div className="flex column ">
      <div className="investor-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>

        <div className="flex gap-10">
          <button
            className="meeting-button"
            onClick={() => {
              navigate("/investor/video");
            }}
          >
            Video Calls
          </button>
          <button
            className="logout-nav-button"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex center padding-20">
        <div className="single-business flex gap-10 ">
          {popup && (
            <div className="book-meeting-popup flex padding-10 column around">
              <CloseIcon
                className="popup-close"
                onClick={() => {
                  setPopup(false);
                }}
              />
              <input
                type="date"
                className="popup-date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <input
                type="time"
                className="popup-time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="meeting link"
                className="popup-link"
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
              <div className="flex around">
                <button
                  className="popup-book-button"
                  onClick={() => {
                    bookMeeting()
                  }}
                >
                  Book
                </button>
              </div>
            </div>
          )}
          <div className="single-business-img">
            <img
              className="single-business-img"
              src={"http://127.0.0.1:8000/business_images/" + business.image}
              alt="logo"
            ></img>
          </div>
          <div className="single-business-details flex column padding-10 gap-20">
            <div className="flex between">
              <h2>{business.name}</h2>
              <CloseIcon
                className="close-icon"
                onClick={() => navigate("/investor")}
              />
            </div>
            <h4>Owned by:{ownerFirst + " " + ownerLast}</h4>
            <h4>{business.location}</h4>
            <h4>{business.industry}</h4>
            <h4>Valuation : {business.valuation}$</h4>
            <h4>Funding needed : {business.funding_needed}$</h4>
            <h4>Stake offered : {business.stake_offered}% of the company</h4>
            <p>{business.description}</p>
            <div className="rating-container flex column gap-20">
              <h4>Add Rating</h4>
              <div className="flex gap-10 ">
                <Rating
                  value={rating}
                  onChange={(event, newRating) => {
                    setRating(newRating);
                  }}
                />
              </div>

              <h4>Add Review</h4>
              <div className="flex gap-20">
                <input
                  type="text"
                  className="review-input padding-10"
                  onChange={(event) => {
                    setReview(event.target.value);
                  }}
                ></input>
                <button className="review-button">Send</button>
              </div>
              <div className="flex center gap-20">
                <button
                  className="single-business-button"
                  onClick={() => {
                    setPopup(true);
                  }}
                >
                  Book a meeting
                </button>
                <button className="single-business-button" onClick={() => {}}>
                  Favorite
                </button>
              </div>
            </div>
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
export default SingleBuisness;

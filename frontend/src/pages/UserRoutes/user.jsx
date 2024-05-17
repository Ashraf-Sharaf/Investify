import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import RegisterBusiness from "./pages/register-business/register-business";
import { useState,useEffect } from "react";
import axios from "axios";
import ChatBot from "./pages/ChatBot/chat_bot";
import Schedule from "./pages/Schedule/schedule";

function User() {
  const [hasBusiness, setHasBusiness] = useState(false);

  const getUserBusiness = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/my_business", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      if (response.data.status === 200) {
        setHasBusiness(true);
    
      }
    } catch (error) {
      console.error("Error loading data");
    }
  };

  useEffect(() => {
    getUserBusiness();
  }, []);


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={hasBusiness ? <Navigate to="/user/home" /> : <RegisterBusiness />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/chat_bot" element={<ChatBot />} />
        <Route path="/schedule" element={<Schedule />} />

      </Routes>
    </div>
  );
}
export default User;

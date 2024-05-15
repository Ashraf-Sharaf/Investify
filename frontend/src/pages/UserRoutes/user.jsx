import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import RegisterBusiness from "./pages/register-business/register-business";
import { useState } from "react";

function User() {
  const [hasBusiness, setHasBusiness] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={hasBusiness ? <Navigate to="/user/home" /> : <RegisterBusiness />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
export default User;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import RegisterBusiness from "./pages/register-business/register-business";


function User() {
  return (
    <div>
      <Routes>
      < Route path="/" element={<RegisterBusiness />} />
        <Route path="/home" element={<Home />} />
  
      </Routes>
    </div>
  );
}
export default User;

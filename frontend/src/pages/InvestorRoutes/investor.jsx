import { Routes, Route } from "react-router-dom";
import CompleteProfile from "./components/CompleteProfile/completeProfile";
import  Home from "./components/InvestorHome/InvestorHome";
import SingleBuisness from "./components/SingleBusiness/SingleBusiness";

function Investor() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CompleteProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/single-business" element={<SingleBuisness />} />
      </Routes>
    </div>
  );
}
export default Investor;

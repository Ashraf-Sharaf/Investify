import { Routes, Route } from "react-router-dom";
import CompleteProfile from "./components/CompleteProfile/completeProfile";
import  Home from "./components/InvestorHome/InvestorHome";

function Investor() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CompleteProfile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
export default Investor;

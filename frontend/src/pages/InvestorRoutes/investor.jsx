import { Routes, Route } from "react-router-dom";
import CompleteProfile from "./pages/CompleteProfile/completeProfile";
import  Home from "./pages/InvestorHome/InvestorHome";
import SingleBusiness from "./pages/SingleBusiness/SingleBusiness"

function Investor() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/single-business/:id" element={<SingleBusiness />} />
      </Routes>
    </div>
  );
}
export default Investor;

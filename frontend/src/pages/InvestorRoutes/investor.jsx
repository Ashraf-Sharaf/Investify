import { Routes, Route } from "react-router-dom";
import CompleteProfile from "./pages/CompleteProfile/completeProfile";
import  Home from "./pages/InvestorHome/InvestorHome";
import SingleBusiness from "./pages/SingleBusiness/SingleBusiness"
import Video from "../Video/video"

function Investor() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/single-business/:id" element={<SingleBusiness />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}
export default Investor;

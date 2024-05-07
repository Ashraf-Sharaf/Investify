import { Routes, Route } from "react-router-dom";
import CompleteProfile from "./components/completeProfile";

function Investor() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CompleteProfile />} />
      </Routes>
    </div>
  );
}
export default Investor;

import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
function Admin() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default Admin;

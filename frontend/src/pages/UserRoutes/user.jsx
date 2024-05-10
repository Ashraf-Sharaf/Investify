import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";


function User() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
  
      </Routes>
    </div>
  );
}
export default User;

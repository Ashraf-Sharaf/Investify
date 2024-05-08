import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Auth from "./pages/Auth/auth";
import UserRoutes from "./pages/UserRoutes/user";
import AdminRoutes from "./pages/AdminRoutes/admin";
import InvestorRoutes from "./pages/InvestorRoutes/investor";
import"./styles/colors.css";
import"./styles/index.css";
import"./styles/utilities.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/investor/*" element={<InvestorRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

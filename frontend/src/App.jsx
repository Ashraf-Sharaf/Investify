import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Auth from "./pages/Auth/auth";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

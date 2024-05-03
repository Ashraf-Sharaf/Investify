import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/auth";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

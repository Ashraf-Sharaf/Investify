import { Routes, Route } from "react-router-dom";
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

import "./auth.css";
import { useState } from "react";

import Login from "./components/login";
import Signup from "./components/signup";

function Auth() {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggle = () => {
    setToggleForm(toggleForm ? false : true);
  };
  return (
    <div>
      {toggleForm ? (
        <Login onToggle={handleToggle} />
      ) : (
        <Signup onToggle={handleToggle} />
      )}
    </div>
  );
}
export default Auth;

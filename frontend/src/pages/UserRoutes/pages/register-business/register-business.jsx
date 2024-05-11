import { useNavigate } from "react-router-dom";
function RegisterBusiness() {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.setItem("token", null);
    navigate("/");
  };
  return (
    <div>
      <div className="investor-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="flex gap-10">
          <button className="logout-nav-button" onClick={() => logout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default RegisterBusiness;

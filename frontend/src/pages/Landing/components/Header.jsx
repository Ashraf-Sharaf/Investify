import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    
    return <div className="landing-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
            <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="flex gap-10">
        <button className="login-nav-button" onClick={()=>{navigate('/auth')}}>Login</button>
        <button className="signup-nav-button" onClick={()=>{navigate('/auth')}}>Sign Up</button>
        </div>

    </div>
}
export default Header;

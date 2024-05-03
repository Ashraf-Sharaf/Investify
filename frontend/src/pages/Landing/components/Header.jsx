function Header(){
    return <div className="landing-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
            <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="flex gap-10">
        <button className="login-nav-button" >Log in</button>
        <button className="signup-nav-button" >Sign up</button>
        </div>

    </div>
}
export default Header;

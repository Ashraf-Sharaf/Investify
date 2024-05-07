import "./completeProfile.css";
function CompleteProfile() {
  return (
    <div className="investor-container flex column gap-20">
      <div className="complete-profile-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="flex gap-10">
          <button className="logout-nav-button">Log out</button>
        </div>
      </div>

      <div className="flex center">
        <div className="complete-profile-form flex column center gap-20 padding-20">
          <h1>Complete Your Profile</h1>

          <div className="complete-profile-info flex between">
            <div className="child flex column  between gap-20">
              <div className="flex gap-20 between center">
                <h3>First Name</h3>
                <input type="text"></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>Location</h3>
                <input type="text"></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>Preferred Industry</h3>
                <input type="text"></input>
              </div>
            </div>

            <div className="child flex column  between gap-20">
              <div className="flex gap-20 between center">
                <h3>Last Name</h3>
                <input type="text"></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>Phone Number</h3>
                <input type="text"></input>
              </div>
              <div className="flex gap-20 between center">
                <h3>Age</h3>
                <input type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CompleteProfile;

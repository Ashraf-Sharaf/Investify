import "./completeProfile.css";
import Footer from "../../../Footer/Footer";

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

          <div className="complete-profile-info flex gap-20 between">
            <div className="half-w  flex column  between gap-20">
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

            <div className="half-w  flex column  between gap-20">
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
          <div className="investment-range flex  ">
            <h3>Investment Size Range</h3>

            <div className="flex gap-10 column">
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>1,000$ - 50,000$</label>
              </div>
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>50,000$ - 75,000$</label>
              </div>
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>75,000$ - 100,000$</label>
              </div>
              <div className="flex gap-20">
                <input type="radio" value="" name="radio" />
                <label>Over 100,000$</label>
              </div>
            </div>
          </div>

          <div className="additional-info gap-10 flex column">
            <h3>Additonal Information</h3>
            <textarea rows="5"></textarea>
          </div>

          <button className="complete-profile-button">Submit</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default CompleteProfile;

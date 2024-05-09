import SearchIcon from "@mui/icons-material/Search";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../../../Footer/Footer";
import "./SingleBusiness.css";

function SingleBuisness() {
  return (
    <div className="flex column ">
      <div className="investor-nav flex align padding-20 between">
        <div className="landing-nav-logo ">
          <img className="logo " src="/images/Investify.png" alt="logo"></img>
        </div>
        <div className="search flex  center">
          <input
            type="text"
            placeholder="Search"
            className="search-input padding-20"
          ></input>
          <div className="search-icon flex center">
            <SearchIcon onClick={() => {}} />
          </div>
        </div>
        <div className="flex gap-10">
          <button className="logout-nav-button">Log out</button>
        </div>
      </div>
      <div className="flex center padding-20">
        <div className="single-business flex gap-10 ">
          <div className="single-business-img">
            <img
              className="single-business-img"
              src="/images/Investify.png"
              alt="logo"
            ></img>
          </div>
          <div className="single-business-details flex column padding-10 gap-20">
            <div className="flex between">
              <h2>Business name</h2>
              <CloseIcon/>
            </div>
            <h4>Beirut, Lebanon</h4>
            <h4>Industry</h4>
            <h4>Valuation : 100,000$</h4>
            <h4>Funding needed : 50,000$</h4>
            <h4>Stake offered : 45% of the company</h4>
            <p>
              XYZ Consulting is a leading provider of innovative solutions in
              digital marketing, specializing in data-driven strategies and
              tailored campaigns to help businesses achieve their online growth
              objectives. With a team of experienced professionals, we deliver
              measurable results and empower our clients to stay ahead in the
              competitive digital landscape.
            </p>
            <h4>Add Rating</h4>
            <div className="flex gap-10 ">
              <StarBorderRoundedIcon />
              <StarBorderRoundedIcon />
              <StarBorderRoundedIcon />
              <StarBorderRoundedIcon />
              <StarBorderRoundedIcon />
            </div>
            <h4>Add Review</h4>
            <div className="flex gap-20">
              <input type="text" className="review-input"></input>
              <button className="review-button">Send</button>
            </div>
            <div className="flex center gap-20">
              <button className="single-business-button">Book a meeting</button>
              <button className="single-business-button">Favorite</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default SingleBuisness;

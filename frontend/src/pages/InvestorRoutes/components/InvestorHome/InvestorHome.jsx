import "./InvestorHome.css";
import SearchIcon from "@mui/icons-material/Search";
function Home() {
  return (
    <div>
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
    </div>
  );
}
export default Home;

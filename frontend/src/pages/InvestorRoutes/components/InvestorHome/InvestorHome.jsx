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

      <div className="investor-businesses-container flex column gap-20">
        <div className="investor-business flex gap-20 ">
          <div className="investor-business-img">
             <img src="/images/Investify.png" alt="No image" />
             </div>
          <div className="investor-business-description padding-10 flex column gap-20">
            <h1>Business Name</h1>
            <h4>Industry</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cumque veritatis repellat? Asperiores, enim quisquam eum saepe quod fugit impedit nulla expedita ipsa, odit reprehenderit aut, maiores iure voluptate in?</p>
            <div className="flex gap-10 center">
          <button className="investor-business-button">View more</button>
        </div>
          </div>





        </div>
        {/* <div className="investor-business -right">
          <h1>hello</h1>
        </div> */}
      </div>
    </div>
  );
}
export default Home;

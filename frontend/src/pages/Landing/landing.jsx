import "./landing.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Stories from "./components/Stories";
import Footer from "../common/Footer";

function Landing(){
    return <div>
    <Header/>
    <Hero/>
    <Analytics/>
    {/* <Stories/> */}
    <Footer/>
    </div>
}
export default Landing;
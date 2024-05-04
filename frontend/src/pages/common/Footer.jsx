import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Footer() {
  return (
    <div className="footer flex between center padding-20">
      <div className="flex column footer-links center gap-10">
        <img className="logo " src="/images/Investify.png" alt="logo"></img>
        <div>
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <XIcon/>
        </div>
      </div>
      <div className="footer-info flex column gap-10">
        <div className="flex gap-10">
          <LocationOnIcon />
          <p>Beirut, Lebanon</p>
        </div>
        <div className="flex gap-10">
          <LocalPhoneIcon/>
          <p>+961 01010203</p>
        </div>
        <div className="flex gap-10">
          <EmailIcon/>
          <p>investify@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;

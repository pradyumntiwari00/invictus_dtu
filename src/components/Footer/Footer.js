import ContactUs from "./ContactUs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Footer_waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <h1 style={{fontStyle:"italic"}} >Contact Us</h1>
      <ContactUs />
      <ul className="Footer_social_icon">
        <li>
          <a href="#" className="fa fa-facebook"></a>
        </li>
        <li>
          <a href="#" className="fa fa-linkedin"></a>
        </li>
        <li>
          <a href="#" className="fa fa-instagram"></a>
        </li>
      </ul>
      <ul className="Footer_menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Team</a></li>
      </ul>
      <p>Copyright reserves</p>
    </footer>
  );
};

export default Footer;

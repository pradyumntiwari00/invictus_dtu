import ContactUs from "./ContactUs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h1 className="contact_us" >Contact Us</h1>
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

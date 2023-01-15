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
      <h1 className="text-4xl italic text-white">Contact Us</h1>
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
      <ul className="Footer_menu mb-8">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/teams">Teams</a>
        </li>
        <li>
          <a href="/quizzes">Quizzes</a>
        </li>
        <li>
          <a href="/hackaton">Hackathon & Ideathon</a>
        </li>
        <li>
          <a href="/summits">Summits</a>
        </li>
        <li>
          <a href="/seminars">Seminars</a>
        </li>
        <li>
          <a href="/CSA">Case Study Competition</a>
        </li>
        <li>
          <a href="/symposium">Symposium</a>
        </li>
        <li>
          <a href="/PE">Programming Events</a>
        </li>
        <li>
          <a href="/miscellaneous">Miscellaneous</a>
        </li>
        <li>
          <a href="/exhibitions">Exhibitions</a>
        </li>
      </ul>
      <p>Copyright reserves</p>
    </footer>
  );
};

export default Footer;

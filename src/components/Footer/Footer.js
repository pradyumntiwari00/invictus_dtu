import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// https://codepen.io/baahubali92/pen/VgrXyL

export default function App() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="list-col col-lg-3 col-md-6 col-sm-6">
              <div className="widget company-intro-widget">
                <a href="index.html" className="site-logo">
                  <img
                    src="https://user-images.githubusercontent.com/87524960/215255962-783f2423-f3bb-4e6a-9af5-847551b85b48.png"
                    alt="logo"
                  />
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.
                </p>
                <ul className="company-footer-contact-list">
                  <li>
                    <i className="fas fa-phone"></i>0123456789
                  </li>
                  <li>
                    <i className="fas fa-clock"></i>Mon - Sat 8.00 - 18.00
                  </li>
                </ul>
              </div>
            </div>
            <div className="list-col col-lg-3 col-md-6 col-sm-6">
              <div className="widget course-links-widget">
                <h5 className="widget-title">Follow our socials</h5>
                <ul className="courses-link-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i>Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i>Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="list-col col-lg-3 col-md-6 col-sm-6">
              <div className="widget latest-news-widget">
                <h5 className="widget-title">Links</h5>
                <ul className="small-post-list">
                  <li>
                    <div className="small-post-item">
                      <Link to="/" className="post-date">
                        Home
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <Link to="/team" className="post-date">
                        Team
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <Link to="/hackathonIdethon" className="post-date">
                        Events
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <Link to="/summits" className="post-date">
                        Summits
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <Link to="/sponsors" className="post-date">
                        Sponsors
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title">Contact us</h5>
                <div className="footer-newsletter">
                  <form className="news-letter-form">
                    <input
                      type="text"
                      name="news-email"
                      id="news-email"
                      placeholder="Your name"
                      className="inpt"
                    />
                    <input
                      type="email"
                      name="news-email"
                      id="news-email"
                      placeholder="Your email address"
                      className="inpt"
                    />
                    <input
                      type="text"
                      name="news-email"
                      id="news-email"
                      placeholder="Message"
                      className="inpt"
                    />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

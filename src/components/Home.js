import React, { useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import Social from "./social/Social";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6);

  useEffect(() => {
    gsap.to(".loader", {
      opacity: "1",
      duration: 3,
      stagger: 0.25,
      ease: "power1.out",
    });
    // gsap.to(".slider", {
    //   y: "-100%",
    //   duration: 1.3,
    //   ease: "power1.out",
    //   delay: 1.5,
    // });
    gsap.to(
      ".intro",
      {
        y: "-100%",
        duration: 1,
        ease: "power1.out",
      },
      "-=0.7"
    );
  }, []);
  return (
    <>
      <div className="home">
        <div className="home_content">
          <img src={require("../images/logo.png")} className="logo" alt="" />
          <h1 className="date">
            13<sup>th</sup>-15<sup>th</sup> February
          </h1>
        </div>
        <div className="backdrop"></div>

        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text">
          <img
            src={require("../images/loading-5.gif")}
            className="loader"
            alt=""
          />
        </div>
      </div>
      <Link to="/faq">
        <div className="faq">
          <button className="btn">
            F <br />
            A <br />
            Q <br />
            S <br />
          </button>
        </div>
      </Link>
      <Social />
      <div className="slider"></div>
      <Footer />
    </>
  );
};

export default Home;

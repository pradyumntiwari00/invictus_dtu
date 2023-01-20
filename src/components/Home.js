import React, { useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.to(".loader", {
      opacity: "1",
      duration: 2,
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
          <h1 className="date">19TH JANUARY</h1>
        </div>

        <div className="backdrop"></div>
      </div>
      <div className="intro">
        <div className="intro-text">
          <img
            src={require("../images/loader.png")}
            className="loader"
            alt=""
          />
        </div>
      </div>
      <div className="slider"></div>
    </>
  );
};

export default Home;

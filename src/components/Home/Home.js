import React, { useEffect, useState } from "react";
import "./Home.css";
import { gsap } from "gsap";
import videoBg from "../../images/Particles.mp4";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    gsap.to(".text", {
      y: "0%",
      duration: 0.75,
      stagger: 0.25,
      ease: "power1.out",
    });
    gsap.to(".slider", {
      y: "-100%",
      duration: 1.3,
      ease: "power1.out",
      delay: 1.5,
    });
    gsap.to(
      ".intro",
      {
        y: "-100%",
        duration: 1,
        ease: "power1.out",
      },
      "-=1"
    );
    gsap.to(".d", {
      y: "-4px",
      duration: 1.9,
      ease: "power1.out",
      delay: 1.5,
      opacity: 1,
    });
    gsap.to(".e", {
      y: "-4px",
      duration: 1.9,
      ease: "power1.out",
      delay: 1.5,
      opacity: 1,
    });
    gsap.to(".f", {
      y: "-4px",
      duration: 1.9,
      ease: "power1.out",
      delay: 1.5,
      opacity: 1,
    });
    gsap.to(".a", {
      y: "-4px",
      duration: 2.1,
      ease: "power1.out",
      delay: 1.8,
      opacity: 1,
    });
    gsap.to(".b", {
      y: "-4px",
      duration: 2.1,
      ease: "power1.out",
      delay: 1.8,
      opacity: 1,
    });
    gsap.to(".c", {
      y: "-4px",
      duration: 2,
      ease: "power1.out",
      delay: 1.6,
      opacity: 1,
    });
    gsap.to(".g", {
      y: "-4px",
      duration: 2,
      ease: "power1.out",
      delay: 1.6,
      opacity: 1,
    });
    gsap.to(".h", {
      y: "-4px",
      duration: 2.1,
      ease: "power1.out",
      delay: 1.8,
      opacity: 1,
    });
    gsap.to(".i", {
      y: "-4px",
      duration: 1.9,
      ease: "power1.out",
      delay: 1.6,
      opacity: 1,
    });
    // gsap.fromTo(".a", { opacity: 0 }, { opacity: 1, duration: 2, delay: 2 });
    // gsap.fromTo(".b", { opacity: 0 }, { opacity: 1, duration: 2, delay: 2 });
    // gsap.fromTo(
    //   ".big_text",
    //   { opacity: 0 },
    //   { opacity: 1, duration: 1, delay: 3, stagger: 0.25 }
    // );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="Home_main">
      <div className="Home_containerr">
        <img
          src={require("../../images/final 1.png")}
          className="Home_bg1"
          alt=""
        />

        <img
          src={require("../../images/layer.png")}
          className="Home_leftt"
          alt=""
          style={{ transform: `translateY(-${offsetY * 0.8}px)` }}
        />
        <div className="Home_flexi">
          <h1
            className="a"
            // style={{ transform: `translateY(-${offsetY * 0.8}px)` }}
          >
            1
          </h1>
          <h1
            className="b"
            // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          >
            9
          </h1>
          <h1
            className="c"
            // style={{ transform: `translateY(${offsetY * 0.6}px)` }}
          >
            J
          </h1>
          <h1
            className="d"
            // style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          >
            A
          </h1>
          <h1
            className="e"
            // style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            N
          </h1>
          <h1
            className="f"
            // style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
          >
            U
          </h1>
          <h1
            className="g"
            // style={{ transform: `translateY(${offsetY * 0.6}px)` }}
          >
            A
          </h1>
          <h1
            className="h"
            // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          >
            R
          </h1>
          <h1
            className="i"
            // style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
          >
            Y
          </h1>
        </div>
      </div>
      <div
        className="Home_content"
        style={{ transform: `translateY(-${offsetY * 1.2}px)` }}
      >
        <div className="backdrop"></div>
        <video src={videoBg} autoPlay loop muted></video>
        <div className="content">
          <h1>About DTU</h1>
          <p>
            Delhi Technological University (DTU), also known as Delhi College of
            Engineering, is a premier technical university located in New Delhi,
            India. The university boasts of a strong industry-academia
            partnership, state-of-the-art infrastructure and facilities, and a
            focus on innovation and entrepreneurship. Invictus 2023, the
            techfest of DTU, is an annual event that provides students with an
            opportunity to showcase their technical, creative, and
            entrepreneurial skills through a wide range of events such as
            technical competitions, workshops, guest lectures and exhibitions.
            It also serves as a platform for students to interact with industry
            experts, learn about the latest advancements in technology, and
            build connections with peers from other universities and colleges.
          </p>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">INVICTUS</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </div>
  );
};

export default Home;

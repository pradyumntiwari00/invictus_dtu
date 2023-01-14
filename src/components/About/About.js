import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="About">
      <div className="About_roww">
        <div className="About_col1">
          <div className="About_icons">
            <img
              src={require("../../images/astronaut.png")}
              data-aos="fade-up"
              className="About_ico About_first-left"
              alt=""
            />
            <img
              src={require("../../images/constellation.png")}
              data-aos="fade-up"
              className="About_ico About_second-left"
              alt=""
            />
            <img
              src={require("../../images/galaxy.png")}
              data-aos="fade-up"
              className="About_ico About_third-left"
              alt=""
            />
            <img
              src={require("../../images/planet.png")}
              data-aos="fade-up"
              className="About_ico About_fourth-left"
              alt=""
            />
            <img
              src={require("../../images/satellite.png")}
              data-aos="fade-up"
              className="About_ico About_fifth-left"
              alt=""
            />
            <img
              src={require("../../images/saturn.png")}
              data-aos="fade-up"
              className="About_ico About_sixth-left"
              alt=""
            />
            <img
              src={require("../../images/space.png")}
              data-aos="fade-up"
              className="About_ico About_seventh-left"
              alt=""
            />
            <img
              src={require("../../images/startup.png")}
              data-aos="fade-up"
              className="About_ico About_eighth-left"
              alt=""
            />
          </div>
        </div>
        <div className="About_contentt font-serif">
          <h1 className="mt-2 mb-2 text-4xl">ABOUT INVICTUS</h1>
          <p className="mt-2 mb-2 text-xl">
            “We are kept from our goal, not by obstacles, but by a clear path to
            a lesser goal.”
            <br />
            <br />
            Invictus, the annual technical fest of Delhi Technological
            University (Formerly Delhi College of Engineering), is one of the
            largest college technical festivals in the country. The techfest is
            organised jointly by all the technical societies of DTU each year.
            INVICTUS exhibits the perfect amalgamation of science, technology,
            and fun. Invictus is a 3-day remarkable fest that emphasises the
            technical aspects along with an inordinate amount of fun, a
            concoction of fierce rivalry yet in a friendly spirit, hosting a
            plethora of events ranging from as conventional as quizzes and fun
            games to as advanced as aerial robotics and Machine Learning, in the
            umbrella techfest of DTU. We at Invictus have always believed in
            expanding our extents and try to make the fest a bigger success each
            year. We aim to collaborate with a large number of institutions and
            organizations, in order to exhibit young talents, various technical
            events, and games and take the fest to new heights.
          </p>
        </div>
        <div className="About_col1">
          <div className="About_icons">
            <img
              src={require("../../images/astronaut.png")}
              data-aos="fade-up"
              className="About_ico About_first-right"
              alt=""
            />
            <img
              src={require("../../images/constellation.png")}
              data-aos="fade-up"
              className="About_ico About_second-right"
              alt=""
            />
            <img
              src={require("../../images/galaxy.png")}
              data-aos="fade-up"
              className="About_ico About_third-right"
              alt=""
            />
            <img
              src={require("../../images/planet.png")}
              data-aos="fade-up"
              className="About_ico About_fourth-right"
              alt=""
            />
            <img
              src={require("../../images/satellite.png")}
              data-aos="fade-up"
              className="About_ico About_fifth-right"
              alt=""
            />
            <img
              src={require("../../images/saturn.png")}
              data-aos="fade-up"
              className="About_ico About_sixth-right"
              alt=""
            />
            <img
              src={require("../../images/space.png")}
              data-aos="fade-up"
              className="About_ico About_seventh-right"
              alt=""
            />
            <img
              src={require("../../images/startup.png")}
              data-aos="fade-up"
              className="About_ico About_eighth-right"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

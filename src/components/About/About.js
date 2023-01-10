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
        <div className="About_contentt">
          <h1>About Invictus</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            temporibus enim ad quaerat sapiente! Magnam suscipit ea eos
            reiciendis numquam corrupti cupiditate aspernatur architecto
            molestias corporis maxime, voluptatem, aliquam libero maiores itaque
            adipisci quae neque consequatur similique dolor. Ipsam aliquam magni
            repellat dicta fugit animi mollitia, nihil provident sunt quia rem
            qui at quidem, doloremque similique enim vel totam beatae.
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

import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="about">
      <div className="roww">
        <div className="col1">
          <div className="icons">
            <img
              src={require("../../images/astronaut.png")}
              data-aos="fade-up"
              className="ico first-left"
              alt=""
            />
            <img
              src={require("../../images/constellation.png")}
              data-aos="fade-up"
              className="ico second-left"
              alt=""
            />
            <img
              src={require("../../images/galaxy.png")}
              data-aos="fade-up"
              className="ico third-left"
              alt=""
            />
            <img
              src={require("../../images/planet.png")}
              data-aos="fade-up"
              className="ico fourth-left"
              alt=""
            />
            <img
              src={require("../../images/satellite.png")}
              data-aos="fade-up"
              className="ico fifth-left"
              alt=""
            />
            <img
              src={require("../../images/saturn.png")}
              data-aos="fade-up"
              className="ico sixth-left"
              alt=""
            />
            <img
              src={require("../../images/space.png")}
              data-aos="fade-up"
              className="ico seventh-left"
              alt=""
            />
            <img
              src={require("../../images/startup.png")}
              data-aos="fade-up"
              className="ico eighth-left"
              alt=""
            />
          </div>
        </div>
        <div className="contentt">
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
        <div className="col1">
          <div className="icons">
            <img
              src={require("../../images/astronaut.png")}
              data-aos="fade-up"
              className="ico first-right"
              alt=""
            />
            <img
              src={require("../../images/constellation.png")}
              data-aos="fade-up"
              className="ico second-right"
              alt=""
            />
            <img
              src={require("../../images/galaxy.png")}
              data-aos="fade-up"
              className="ico third-right"
              alt=""
            />
            <img
              src={require("../../images/planet.png")}
              data-aos="fade-up"
              className="ico fourth-right"
              alt=""
            />
            <img
              src={require("../../images/satellite.png")}
              data-aos="fade-up"
              className="ico fifth-right"
              alt=""
            />
            <img
              src={require("../../images/saturn.png")}
              data-aos="fade-up"
              className="ico sixth-right"
              alt=""
            />
            <img
              src={require("../../images/space.png")}
              data-aos="fade-up"
              className="ico seventh-right"
              alt=""
            />
            <img
              src={require("../../images/startup.png")}
              data-aos="fade-up"
              className="ico eighth-right"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

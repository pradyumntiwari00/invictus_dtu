import Home from "./Home";

import About from "../About/About";
import Highlights from "../highlights";
import OurSponsers from "../OurSponsers/OurSponsers";
import WhySponser from "../WhySponser/WhySponser";
import FAQ from "../FAQ";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ConfigDark from "../../config/particlesjs-config.json";

const HomePage = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <div className="Home_box">
        <Particles
          id="tsparticles"
          style={{ position: "absolute", top: 0 }}
          params={ConfigDark}
          init={particlesInit}
        />
      </div>
      <div>
        <Home />
        <About />
        <OurSponsers />
        <WhySponser />
        <Highlights />
        <FAQ />
      </div>
    </div>
  );
};

export default HomePage;

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ConfigDark from "../config/particlesjs-config.json";

const ParticlesWrapper = ({children}) => {
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
      {children}
    </div>
  );
};

export default ParticlesWrapper;

import Home from "./Home";

import About from "../About/About";
import Highlights from "../highlights";
import OurSponsers from "../OurSponsers/OurSponsers";
import WhySponser from "../WhySponser/WhySponser";
import FAQ from "../FAQ";

const HomePage = () => {
  return (
    <div>
      <div>
        <Home />
        <About />
        <OurSponsers />
        <WhySponser />
        <FAQ />
        <Highlights />
      </div>
    </div>
  );
};

export default HomePage;

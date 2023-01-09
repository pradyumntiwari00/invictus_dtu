import Home from "./Home";
import About from "./About";
import Highlights from "./highlights";
// import Sponser_tab from "./Sponser_tab";
import OurSponsers from "./OurSponsers.js";
import WhySponser from "./WhySponser.js";
import Accordion from "./Accordion.jsx";


const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      {/* <Sponser_tab /> */}
      <Highlights />
      {/* <OurSponsers />
      <WhySponser /> */}
      <Accordion />
    </div>
  );
};

export default HomePage;

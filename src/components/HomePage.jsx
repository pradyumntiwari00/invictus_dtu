import Home from "./Home/Home";
import About from "./About/About";
import Highlights from "./highlights";
// import Sponser_tab from "./Sponser_tab";
import OurSponsers from "./OurSponsers/OurSponsers";
import WhySponser from "./WhySponser/WhySponser";
import FAQ from "./FAQ/";


const HomePage = () => {
  return (
    <div>
      {/* <Home /> */}
      <About />
      {/* <Sponser_tab /> */}
      {/* <Highlights /> */}
      <OurSponsers />
      <WhySponser />
      <FAQ />
    </div>
  );
};

export default HomePage;

import "./App.css";
import Home from "./components/Home";
import OurSponsers from './components/OurSponsers.js';
import WhySponser from './components/WhySponser.js';
import Sponser_tab from "./components/Sponser_tab";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
function App() {
  return (
    <div>
      <Home />
      <Sponser_tab />
    <OurSponsers/>
    <WhySponser/>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/Home";
import Sponser_tab from "./components/Sponser_tab";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import Highlights from "./components/highlights";
function App() {
  return (
    <div>
      <Home />
      <Highlights />
      <Sponser_tab />
    </div>
  );
}

export default App;

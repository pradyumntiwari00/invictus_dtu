import "./App.css";
import Home from "./components/Home";
import Sponser_tab from "./components/Sponser_tab";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
function App() {
  return (
    <div>
      <Home />
      <Sponser_tab />
    </div>
  );
}

export default App;

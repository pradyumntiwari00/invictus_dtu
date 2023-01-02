import "./App.css";
import Home from "./components/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import About from "./components/About";
function App() {
  return (
    <div>
      <Home />
      <About />
    </div>
  );
}

export default App;

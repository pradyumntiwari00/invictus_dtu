import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Summit from "./components/Summit/Summit.js";import TechEvents from "./components/TechEvents";
import Faq from "./components/FAQ/Faq";

const events = ["Hackthon & Ideathon", "Summits"];

function App() {
  return (
    <Router>
      { <Navbar/> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="summits" element={<Summit/>} />
        <Route path="hackathonIdethon" element={<TechEvents/>} />
        <Route path="highlights" element={<Highlights />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </Router>  
  );
}

export default App;

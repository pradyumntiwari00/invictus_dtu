import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Summit from "./components/Summit/Summit.js";
import TechEvents from "./components/TechEvents";
import Faq from "./components/FAQ/Faq";

function App() {
  return (
    <Router>
      {<Navbar />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="team" element={<Team />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="summits" element={<Summit />} />
        <Route path="events" element={<TechEvents />} />
        <Route path="highlights" element={<Highlights />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;

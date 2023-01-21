import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Team from "./components/Team";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors";

const events = ["Hackthon & Ideathon", "Summits"];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/summits" element={<Events events={events[1]}/>} />
        <Route path="/hackathonIdethon" element={<Events events={events[0]}/>} />
      </Routes>
    </Router>
  )
}

export default App;

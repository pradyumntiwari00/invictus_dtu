import "./App.css";
import Home from "./components/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Teams from "./components/Teams/Teams";
import Footer from "./components/Footer/Footer";
import Events from "./components/Events/Events";
const events = [
  "Blogs",
  "Hackathon",
  "Quiz"
]

function App() {
  return (
    <div>
      <div style={{ width: "400px" }}>HI</div>
      {/* <Home /> */}
      {/* <Teams /> */}
      <Events event={events[2]} />
      <Footer />
    </div>
  );
}

export default App;

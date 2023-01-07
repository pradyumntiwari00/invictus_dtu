import "./App.css";
import Home from "./components/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";
import About from "./components/About";
import Teams from "./components/Teams/Teams";
import Highlights from "./components/highlights";
import Sponser_tab from "./components/Sponser_tab";
import Footer from "./components/Footer/Footer";
import Events from "./components/Events/Events";
const events = ["Blogs", "Hackathon", "Quiz"];

function App() {
  return (
    <div>
      <div style={{ width: "400px" }}>HI</div>
      {/* <Home /> */}
      <About />
      <Sponser_tab />
      <Highlights />
      {/* <Teams /> */}
      <Events event={events[2]} />
      <Footer />
    </div>
  );
}
export default App;

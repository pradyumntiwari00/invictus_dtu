import "./App.css";
import Events from "./components/Events/Events";
import Home from "./components/Home";
const events = ["Hackthon & Ideathon", "Summits"];

function App() {
  return (
    <div>
      <Home />
      <Events events={events[1]}/>
      <Events events={events[0]}/>
    </div>
  );
}

export default App;

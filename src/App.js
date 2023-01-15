import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Teams from "./components/Teams/Teams";
import Footer from "./components/Footer/Footer";
import Events from "./components/Events/Events";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter } from "react-router-dom";
import ParticlesWrapper from "./utils/ParticleWrapper";
const events = ["Blogs", "Quiz", "Hackathon", "Summits", "Seminars"];
function App() {
  return (
    <div>
      <BrowserRouter forceRefresh={true}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ParticlesWrapper>
              <HomePage />
            </ParticlesWrapper>
          </Route>
          <Route exact path="/teams">
            <ParticlesWrapper>
              <Teams />
            </ParticlesWrapper>
          </Route>
          <Route exact path="/quizzes">
            <ParticlesWrapper>
              <Events event={events[1]} />
            </ParticlesWrapper>
          </Route>
          <Route exact path="/hackaton">
            <ParticlesWrapper>
              <Events event={events[2]} />
            </ParticlesWrapper>
          </Route>
          <Route exact path="/summits">
            <ParticlesWrapper>
              <Events event={events[3]} />
            </ParticlesWrapper>
          </Route>
          <Route exact path="/seminars">
            <ParticlesWrapper>
              <Events event={events[4]} />
            </ParticlesWrapper>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Teams from "./components/Teams/Teams";
import Footer from "./components/Footer/Footer";
import Events from "./components/Events/Events";
import HomePage from "./components/HomePage";
import { BrowserRouter } from "react-router-dom";
const events = ["Blogs", "Quiz", "Hackathon"];

function App() {
  return (
    <div>
      <BrowserRouter forceRefresh={true}>
        {/* <Navbar /> */}
        <Switch></Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact  path="/teams">
          <Teams />
        </Route>
        <Route exact  path="/quizzes">
          <Events event={events[1]} />
        </Route>
        <Route exact  path="/hackaton">
          <Events event={events[2]} />
        </Route>
        <Route exact  path="/summit">
          <Events event={events[3]} />
        </Route>
        {/* <Route exact  path="/Seminars">
          <Events event={events[4]} />
        </Route> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import "./App.css";


function App() {
  return (
    <Router>
      <Jumbotron />
      <div>
        <NavTabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;

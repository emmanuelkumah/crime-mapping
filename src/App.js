import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainApp from "./component/MainApp/MainApp";
import Home from "./component/Pages/Home";
import NavBar from "./component/Pages/NavBar";
import "./App.css";
import FooterSection from "./component/FooterSection";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/app">
          <MainApp />
        </Route>
      </Switch>
      <FooterSection />
    </Router>
  );
}

export default App;

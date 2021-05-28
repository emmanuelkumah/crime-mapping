import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainApp from "./component/MainApp/MainApp";
import Home from "./component/Pages/Home";
import NavBar from "./component/Pages/NavBar";

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
    </Router>
  );
}

export default App;

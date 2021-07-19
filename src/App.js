import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Addition from "./Addition";
import Multiplication from "./Multiplication";
import AdditionGame from "./AdditionGame";
import MultiplicationGame from "./MultiplicationGame";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addition">
          <Addition />
        </Route>
        <Route exact path="/multiplication">
          <Multiplication />
        </Route>
        <Route path="/addition/:id">
          <AdditionGame />
        </Route>
        <Route path="/multiplication/:id">
          <MultiplicationGame />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

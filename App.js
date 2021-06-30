import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Skills from "./pages/Skills";
import Home from "./Home";
import Projects from "./pages/Projects";
const App = () => {
  return (
      <Router>
        <Navbar/>
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
      </Switch>
      </Router>
  );
};
export default App;
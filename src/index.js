import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Grid } from "react-bootstrap";

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topics";
import AppNav from "./components/AppNav";

import "bootstrap/dist/css/bootstrap.css";

const BasicExample = () => (
  <Router>
    <Grid>
      <AppNav />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </Grid>
  </Router>
);

render(<BasicExample />, document.getElementById("root"));

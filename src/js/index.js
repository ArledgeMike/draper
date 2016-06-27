import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

//MAIN LAYOUT PAGE
import Layout from "./pages/Layout";
//PAGES 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Todo from "./pages/Todo";
import Crimes from "./pages/Crimes";

require('../css/scss/index.scss')

ReactDOM.render(
    //CREATE ROUTES FOR EACH PAGES
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
          <Route path="about" component={About}> </Route>
          <Route path="services" component={Services} ></Route>
          <Route path="contact" component={Contact}></Route>
          <Route path="crimes" component={Crimes}></Route>
          <Route path="todo" component={Todo}></Route>
      </Route>
    </Router>,    
    document.getElementById("app")

);
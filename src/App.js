import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Gallery from "./Gallery"
import Services from "./Services"
import Contact from "./Contact"

function App() {
  return (
    <div>
      <Link exact to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/gallery">Gallery</Link>
      <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/gallery"><Gallery /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/contact"><Contact /></Route>
      </Switch>
    </div>
  );
}

export default App;

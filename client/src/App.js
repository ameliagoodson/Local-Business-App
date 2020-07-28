import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Services from "./components/pages/Services.js";
import About from "./components/pages/About/About.js";
import Contact from "./components/pages/Contact.js";
import Login from "./components/Login/Login.js";
import Home from "./components/pages/Home.js";
import Booking from "./components/pages/Booking.js";
import Register from "./components/Register/register.js";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

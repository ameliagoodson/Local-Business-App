import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Services from "./components/pages/Services.js";
import About from "./components/pages/About/About.js";
import Contact from "./components/pages/Contact.js";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home.js";
import Booking from "./components/pages/Booking/Booking.js";
import Register from "./components/pages/Register/register.js";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";

function App() {
  return (
    <Router>
      <div className="app-site">
        <div className="site-content">
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
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

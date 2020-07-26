import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Services from "./components/pages/Services.js";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Login from "./components/Login/Login.js";
import Home from "./components/pages/Home.js";
import Booking from "./components/pages/Booking.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route> */}
          {/* <Route>
            <NoMatch />
          </Route> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

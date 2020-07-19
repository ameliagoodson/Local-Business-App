import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books.js";
import Detail from "./pages/Detail.js";
import NoMatch from "./pages/NoMatch.js";
import Nav from "./components/Nav/Nav.js";
import Services from "./pages/Services.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

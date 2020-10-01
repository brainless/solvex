import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Search from "components/Search"; // Find a place to stay
import Stay from "components/Stay"; // Actual rooms/houses
import Book from "components/Book"; // This is the checkout process like in eCommerce
import Booking from "components/Booking"; // My bookings
import About from "components/About";
import Home from "components/Home";

function App() {
  // React <Fragment> - https://reactjs.org/docs/fragments.html
  // Start with React Router - https://reactrouter.com/web/guides/quick-start

  return (
    <Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/stay">
            <Stay />
          </Route>

          <Route path="/book">
            <Book />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

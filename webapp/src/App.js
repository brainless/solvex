import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Search from "components/Search"; // Find a place to stay
import Stay from "screens/Stay"; // Actual rooms/houses
import Book from "screens/Book"; // This is the checkout process like in eCommerce
import Booking from "screens/Booking"; // My bookings
import About from "screens/About";
import Home from "screens/Home";
import Account from "screens/Account";
import Login from "screens/Account/Login";

function App() {
  // React <Fragment> - https://reactjs.org/docs/fragments.html
  // Start with React Router - https://reactrouter.com/web/guides/quick-start

  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className="block clear-both" style={{ paddingBottom: "57px" }} />

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

          <Route path="/about">
            <About />
          </Route>

          <Route path="/account">
            <Account />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/booking">
            <Booking />
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

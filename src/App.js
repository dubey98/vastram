import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import css
import "./App.scss";
// import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import FrontPage from "./FrontPage/FrontPage";
import Auth from "./auth/Auth";

function App() {
  const categories = [
    "Home",
    "Men",
    "Women",
    "Kids",
    "HomeAndLiving",
    "Beauty",
  ];
  return (
    <Router>
      <header className="block has-navbar-fixed-top is-family-sans-serif">
        <Navbar />
      </header>
      <main className="main block is-family-sans-serif">
        <Switch>
          <Route path="/shop">
            <FrontPage categories={categories} />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
      <footer className="footer block is-family-sans-serif">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

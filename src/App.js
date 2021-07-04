import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import css
import "bulma/css/bulma.min.css";
// import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import Kids from "./Pages/Kids/Kids";
import Homeliving from "./Pages/Homeliving/Homeliving";
import Beauty from "./Pages/Beauty/Beauty";
import Auth from "./auth/Auth";
import Home from "./Pages/Home/Home";
import Error from "./components/Error/Error";

function App() {
  return (
    <Router>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Switch>
          <Route path="/men">
            <Men />
          </Route>
          <Route path="/women">
            <Women />
          </Route>
          <Route path="/kids">
            <Kids />
          </Route>
          <Route path="/homeliving">
            <Homeliving />
          </Route>
          <Route path="/beauty">
            <Beauty />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

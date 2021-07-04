import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Navbar />
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

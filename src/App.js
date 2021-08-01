import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import ShopFront from "./ShopFront/ShopFront";
import Auth from "./auth/Auth";
import ProductList from "./ProductList/ProductList";

import "./App.scss";
import ProductDetail from "./ProductDetail/ProductDetail";
import { ProvideAuth } from "./auth/use-auth";

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
    <ProvideAuth>
      <Router>
        <div className="is-family-sans-serif">
          <div className="block">
            <Navbar />
          </div>

          <main className="block">
            <Switch>
              <Route path="/shop/search">
                <ProductList />
              </Route>
              {categories.map((val, index) => {
                return (
                  <Route path={`/shop/${val}`} key={index}>
                    <ShopFront category={val} />
                  </Route>
                );
              })}
              <Route path="/shop/">
                <ProductDetail />
              </Route>
              <Route path="/auth">
                <Auth />
              </Route>
              <Route path="/">
                <ProductList />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </main>

          <div className="footer block">
            <Footer />
          </div>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;

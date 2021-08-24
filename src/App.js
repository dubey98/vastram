import React from "react";
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
import { useAuth } from "./auth/use-auth";
import WishList from "./components/WishList/WishList";
import CheckOut from "./checkout/CheckOut";
import HomePage from "./HomePage/HomePage";
import User from "./User/User";

function App() {
  const auth = useAuth();

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
      <div className="is-family-sans-serif">
        <div className="block">
          <Navbar />
        </div>

        <main className="block">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
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
            <Route path="/shop/products">
              <ProductList />
            </Route>
            <Route path="/shop/:productId">
              <ProductDetail />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            {auth.user ? (
              <Route path="/checkout">
                <CheckOut id={auth.user.id} />
              </Route>
            ) : (
              <Route path="/checkout">
                <Error statusCode={403} />
              </Route>
            )}
            {auth.user ? (
              <Route path="/wishlist">
                <WishList id={auth.user.id} />
              </Route>
            ) : (
              <Route path="/wishlist">
                <Error statusCode={403} />
              </Route>
            )}

            <Route path="/user/">
              <User />
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
  );
}

export default App;

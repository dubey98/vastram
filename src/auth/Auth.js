import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  let match = useRouteMatch();

  return (
    <section className="section is-medium is-centered has-text-weight-light is-size6">
      <div className="columns is-centered">
        <div className="column is-one-third has-text-centered content">
          <p className="has-text-weight-bold">Login Using</p>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Google</p>
                <p className="title">G</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Twitter</p>
                <p className="title">
                  <TwitterIcon />
                </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">facebook</p>
                <p className="title">
                  <FacebookIcon />
                </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">random</p>
                <p className="title">r</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <Switch>
        <Route path={`${match.path}/login`}>
          <LoginForm />
        </Route>
        <Route path={`${match.path}/signup`}>
          <SignupForm />
        </Route>
      </Switch>
    </section>
  );
};

export default Auth;

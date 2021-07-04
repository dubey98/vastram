import React from "react";
import { Switch, useParams, useRouteMatch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/login`}>
          <LoginForm />
        </Route>
        <Route path={`${match.path}/signup`}>
          <SignupForm />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;

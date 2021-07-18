import React from "react";
import { Switch } from "react-router-dom";
import { useRouteMatch, Route } from "react-router-dom";

import HomeComponent from "../components/HomeConponent/HomeComponent";

const ShopFront = (props) => {
  const match = useRouteMatch();
  console.log(props);
  return (
    <div>
      <Switch>
        {props.categories.map((value, index) => {
          return (
            <Route exact path={`${match.path}/${value}`} key={index}>
              <HomeComponent category={value} />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};

export default ShopFront;

import React from "react";
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../auth/use-auth";

const NavbarDropDown = ({ burgerVisible }) => {
  const auth = useAuth();
  const history = useHistory();

  if (burgerVisible) {
    return (
      <div className="navbar-item">
        <div className="is-arrowless">
          <div
            className="navbar-item is-clickable"
            onClick={() =>
              auth.user ? history.push("/user") : history.push("/auth/login")
            }
          >
            {auth.user ? "Your Account" : "Login"}
          </div>
          <div
            className="navbar-item is-clickable"
            onClick={() =>
              auth.user
                ? history.push("/user/orders")
                : history.push("/auth/signup")
            }
          >
            {auth.user ? "Your orders" : "SignUp"}
          </div>
          <div
            className="navbar-item is-clickable"
            onClick={(e) => {
              auth.user ? auth.signOut() : history.push("/contact");
            }}
          >
            {auth.user ? "Sign out" : "Contact"}
          </div>

          <Link className="navbar-item is-clickable" to="/support">
            Report an issue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar-item">
      <div className="navbar-item has-dropdown is-hoverable">
        <PersonOutlineSharpIcon />

        <div className="navbar-dropdown is-arrowless is-right">
          <div
            className="navbar-item is-clickable"
            onClick={() =>
              auth.user ? history.push("/user") : history.push("/auth/login")
            }
          >
            {auth.user ? "Your Account" : "Login"}
          </div>
          <div
            className="navbar-item is-clickable"
            onClick={() =>
              auth.user
                ? history.push("/user/orders")
                : history.push("/auth/signup")
            }
          >
            {auth.user ? "Your orders" : "SignUp"}
          </div>
          <div
            className="navbar-item is-clickable"
            onClick={() =>
              auth.user ? auth.signOut() : history.push("/contact")
            }
          >
            {auth.user ? "Sign out" : "Contact"}
          </div>
          <hr className="navbar-divider" />
          <div className="navbar-item is-clickable " to="/support">
            Report an issue
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropDown;

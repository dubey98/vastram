import React from "react";
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";
import { Link } from "react-router-dom";
import { useAuth } from "../../../auth/use-auth";

const NavbarDropDown = ({ user }) => {
  const auth = useAuth();

  return (
    <div className="navbar-item">
      <div className="navbar-item has-dropdown  is-hoverable">
        <Link className="navbar-item" to="/">
          <PersonOutlineSharpIcon />
        </Link>

        {auth.user ? (
          <div className="navbar-dropdown is-arrowless is-right">
            <Link className="navbar-item" to="/user">
              Your Account
            </Link>
            <Link className="navbar-item" to="/user/orders">
              Your orders
            </Link>
            <Link
              className="navbar-item"
              to="/auth/signout"
              onClick={(e) => {
                auth.signOut();
              }}
            >
              Sign out
            </Link>
            <hr className="navbar-divider" />
            <Link className="navbar-item" to="/support">
              Report an issue
            </Link>
          </div>
        ) : (
          <div className="navbar-dropdown is-arrowless is-right">
            <Link className="navbar-item" to="/auth/login">
              Login
            </Link>
            <Link className="navbar-item" to="/auth/signup">
              Signup
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <hr className="navbar-divider" />
            <Link className="navbar-item" to="/support">
              Report an issue
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarDropDown;

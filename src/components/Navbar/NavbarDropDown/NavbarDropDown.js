import React from "react";
import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";
import { Link } from "react-router-dom";

const NavbarDropDown = (props) => {
  return (
    <div className="navbar-item">
      <div className="navbar-item has-dropdown  is-hoverable">
        <Link className="navbar-item">
          {props.islogin ? <PersonOutlineSharpIcon /> : props.displayText}
        </Link>

        {props.islogin && (
          <div className="navbar-dropdown is-arrowless is-right">
            <>
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
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarDropDown;

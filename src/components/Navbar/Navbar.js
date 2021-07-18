//import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";
import NavbarDropDown from "./NavbarDropDown/NavbarDropDown";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

function Navbar() {
  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand mr-6 ml-6">
          <Link className="navbar-item" to="/shop/home">
            <img src="\logo2.png" width="80" height="50" alt="Brand" />
          </Link>

          <Link
            to="/"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div className="navbar-menu is-spaced has-text-weight-semibold">
          <div className="navbar-start mr-4 ml-4">
            <Link className="navbar-item is-tab" to="/shop/men">
              MEN
            </Link>

            <Link className="navbar-item mr-4 ml-4 is-tab" to="/shop/women">
              WOMEN
            </Link>

            <Link className="navbar-item mr-4 ml-4 is-tab" to="/shop/kids">
              KIDS
            </Link>

            <Link
              className="navbar-item mr-4 ml-4 is-tab"
              to="/shop/homeandliving"
            >
              HOME & LIVING
            </Link>

            <Link className="navbar-item mr-4 ml-4 is-tab" to="/shop/beauty">
              BEAUTY
            </Link>
          </div>

          <div className="navbar-end">
            <div className="control navbar-item is-expanded">
              <input className="input" type="text" placeholder="Search" />
            </div>

            <NavbarDropDown islogin />

            <Link className="navbar-item" to="/wishlist">
              <FavoriteBorderSharpIcon />
            </Link>

            <Link className="navbar-item" to="/checkout">
              <LocalMallOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

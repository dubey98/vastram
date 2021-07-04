import PersonOutlineSharpIcon from "@material-ui/icons/PersonOutlineSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand mr-6 ml-6">
          <Link class="navbar-item" to="/">
            <img src="\logo192.png" width="28" height="28" alt="Brand" />
          </Link>

          <Link
            to="/"
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbarBasicExample" class="navbar-menu is-spaced">
          <div class="navbar-start mr-4 ml-4">
            <Link class="navbar-item" to="/men">
              MEN
            </Link>

            <Link class="navbar-item mr-4 ml-4" to="/women">
              WOMEN
            </Link>

            <Link class="navbar-item mr-4 ml-4" to="/kids">
              KIDS
            </Link>

            <Link class="navbar-item mr-4 ml-4" to="/homeliving">
              HOME & LIVING
            </Link>

            <Link class="navbar-item mr-4 ml-4" to="/beauty">
              Beauty
            </Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <Link class="navbar-link" to="/">
                More
              </Link>

              <div class="navbar-dropdown">
                <Link class="navbar-item" to="/">
                  About
                </Link>
                <hr class="navbar-divider" />
                <Link class="navbar-item" to="/">
                  Report an issue
                </Link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="control has-icons-left mt-2">
              <input
                class="input is-success"
                type="text"
                placeholder="Search"
              />
              <span class="icon is-small is-left">
                <SearchOutlinedIcon />
              </span>
            </div>
            <div class="navbar-item">
              <div class="buttons">
                <Link class="button " to="/profile">
                  <PersonOutlineSharpIcon />
                </Link>
                <Link class="button" to="/wishlist">
                  <FavoriteBorderSharpIcon />
                </Link>
                <Link class="button" to="/checkout/cart">
                  <LocalMallOutlinedIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

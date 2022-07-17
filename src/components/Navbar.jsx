import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import navbarStyles from "../components/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <Link to="/" className={navbarStyles.title}>
        <h3>React Movie App</h3>
      </Link>
      <div className={navbarStyles["link-container"]}>
        <ul>
          <li>
            <NavLink className={navbarStyles.btn} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={navbarStyles.btn} to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

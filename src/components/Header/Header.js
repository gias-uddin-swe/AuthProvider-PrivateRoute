import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "./../../Hooks/useFirebase";

const Header = () => {
  const { handleLogout, user } = useFirebase();
  return (
    <div>
      <div className="menu-container">
        <Link to="/home" className="header-items">
          Home
        </Link>
        <Link to="/checkout" className="header-items">
          Payments
        </Link>
        <Link to="/shipping" className="header-items">
          shipping
        </Link>

        <Link to="/register" className="header-items">
          Register
        </Link>

        {user?.email ? (
          <li onClick={handleLogout} className="header-items">
            Logout
          </li>
        ) : (
          <Link to="/login" className="header-items">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

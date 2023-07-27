import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [isBtnNameLogin, setIsBtnNameLogin] = useState(true);
  const onlineStatus = useOnlineStatus();
  const handleLoginLogout = () => {
    setIsBtnNameLogin((preValue) => !preValue);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
        <li>
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={handleLoginLogout}>
              {isBtnNameLogin ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

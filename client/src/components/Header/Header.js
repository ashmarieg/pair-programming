import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/SomeGoodBadAdvicenewlogo.png";

function Header() {
  return (
    <header>
      <nav class="nav">
        <a href="./index.html"></a>
        <div className="nav__container">
          <ul className="nav__items">
            <Link to="/">
              <img className="nav__logo" src={logo} alt="logo" />
            </Link>
            <Link to="/badadvice">
              <li>Bad Advice</li>
            </Link>
            <Link to="/goodadvice">
              <li>Good Advice</li>
            </Link>
          </ul>
          <div className="border-bottom"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

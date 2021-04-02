import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav class="nav">
        <a href="./index.html"></a>
        <div className="nav__container">
          <ul className="nav__items">
            <Link to="/badadvice">
              {" "}
              <li>Bad Advice</li>
            </Link>
            <Link to="/goodadvice">
              {" "}
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

import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
    <nav class="nav">
            <a href="./index.html"></a>
        <div className="nav__container">
            <ul className="nav__items">
                <li>Bad Advice</li>
                <li><a href="#">Good Advice</a></li>
            </ul>
            <div className="border-bottom"></div>
        </div>
    </nav>
    
    </header>
  );
}

export default Header;
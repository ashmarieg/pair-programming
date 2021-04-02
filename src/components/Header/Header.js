import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header>
    <nav class="nav">
            <a href="./index.html"></a>
        <div class="nav__container">
            <ul class="nav__items">
                <li><a href="#">Bad Advice</a></li>
                <li><a href="#">Good Advice</a></li>
            </ul>
            <div class="border-bottom"></div>
        </div>
    </nav>
    
    </header>
  );
}

export default Header;
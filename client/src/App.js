import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BadAdvice from "./components/BadAdvice/BadAdvice";
import GoodAdvice from "./components/GoodAdvice/GoodAdvice";
import Header from "./components/Header/Header.js";
// import BadAdvice from
// import './App.css';

// import React from 'react'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/badadvice" component={BadAdvice} />
          <Route path="/goodadvice" component={GoodAdvice} />
        </Switch>
      </div>
    </Router>
  );
}

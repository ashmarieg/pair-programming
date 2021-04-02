import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
// import logo from './logo.svg';
import BadAdvice from './components/BadAdvice/BadAdvice'
import Header from './components/Header/Header.js'
// import BadAdvice from 
// import './App.css';

// import React from 'react'

export default function App() {
  return (
    <Router>
    <div>
      <Header />
      <BadAdvice />
      
    </div>
    </Router>
  )
}





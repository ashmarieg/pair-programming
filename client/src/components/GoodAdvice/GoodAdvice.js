import React, { useState, useEffect } from "react";
import "./GoodAdvice.scss";
// import axios from "axios";

let urlGood = "https://api.adviceslip.com/advice";

function GoodAdvice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch(urlGood)
      .then((response) => response.json())
      .then((json) => {
        setAdvice(json.slip.advice);
      });
  }, []);

  let fetchGoodAdvice = () => {
    fetch(urlGood)
      .then((response) => response.json())
      .then((json) => {
        setAdvice(json.slip.advice);
      });
  };

  return (
    <div className="good">
      <h2 className="good__heading">{advice}</h2>
      <button className="good__button" onClick={fetchGoodAdvice}>
        Generate new advice
      </button>
    </div>
  );
}

export default GoodAdvice;

import React, { useState, useEffect } from "react";
// import axios from "axios";

let urlGood = "https://api.adviceslip.com/advice";

function GoodAdvice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch(urlGood)
      .then((response) => response.json())
      .then((json) => {
        // setAdvice();
        setAdvice(json.slip.advice);
        // console.log(advice);
      });
  }, []);

  let fetchGoodAdvice = () => {
    fetch(urlGood)
      .then((response) => response.json())
      .then((json) => {
        // setAdvice();
        setAdvice(json.slip.advice);
        // console.log(advice);
      });
  };

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={fetchGoodAdvice}>Generate new advice</button>
    </div>
  );
}

export default GoodAdvice;

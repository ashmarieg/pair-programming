import React, { useState, useEffect } from "react";
import "./BadAdvice.scss";
import axios from "axios";

function BadAdvice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch("/api/badadvice")
      .then((response) => response.json())
      .then((advice) => {
        setAdvice(advice);
      });
  }, []);

  let NewAdvice = () => {
    fetch("/api/badadvice")
      .then((response) => response.json())
      .then((advice) => {
        setAdvice(advice);
      });
  };
  return (
    <div className="bad">
      <h2 className="bad__heading">{advice}</h2>
      <button className="bad__button" onClick={NewAdvice}>
        Generate new advice
      </button>
    </div>
  );
}

export default BadAdvice;

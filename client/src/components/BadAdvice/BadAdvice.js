import React, { useState, useEffect } from "react";
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
    <div>
      <h2>{advice}</h2>
      <button onClick={NewAdvice}>Generate new advice</button>
    </div>
  );
}

export default BadAdvice;

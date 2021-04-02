import React, { useState, useEffect } from 'react'
import axios from 'axios';

let url = 'https://badadvice.rest/api/random'

function BadAdvice() {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        fetch(url).then(response => response.json())
        .then(
            (advice) => {
                // setAdvice();
                console.log(advice);
            }
        )
    }, []);
    return (
        <div>
            <h2>{advice}</h2>
            <button>Generate new advice</button>
        </div>
    )
}


export default BadAdvice;

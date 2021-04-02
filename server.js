const { Router } = require('express');
const express = require('express')
const app = express()
const PORT = 8080
const axios = require('axios');

app.use(express.json())

app.get('/api/badadvice', (req, res) => {
    const advice = axios.get('https://badadvice.rest/api/random')
    .then((response) => res.json(response.data))
    .catch((error) => console.log(error));
    // res.json('hello');

})

app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`)
} ) 
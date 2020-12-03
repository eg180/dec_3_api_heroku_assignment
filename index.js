const express = require('express');
require('dotenv').config();
const app = express();
const importData = require('./data.json')
const cors = require('cors');

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, world!")
})


app.get("/api/films", (req, res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Example app is listening at http://localhost:${port}`)
})
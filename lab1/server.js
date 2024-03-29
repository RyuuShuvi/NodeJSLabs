//server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send(process.env.TEXT);
    res.end();
});

module.exports = app;

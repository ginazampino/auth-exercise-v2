const express = require('express');
const router = express.Router();
const passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist/index.html'))
    });
};
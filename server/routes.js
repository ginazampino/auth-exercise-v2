const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist/index.html'))
    });

    // Debug routes:

    app.get('/pass', (req, res) => {
        res.send('Passed')
    });

    app.get('/fail', (req, res) => {
        res.send('Failed')
    });
        
};
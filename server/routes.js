const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/fail');
    };
};

router.use(authenticate);

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist/index.html'))
    });

    // Authentication routes:

    app.get('/google/auth', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));
    
    app.get('/google/callback', passport.authenticate('google', {
        successRedirect: '/pass',
        failureRedirect: '/fail'
    }));

    app.get('/google/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });    
    

    // Debug routes:

    app.get('/pass', authenticate, (req, res) => {
        res.send('Passed')
    });

    app.get('/fail', (req, res) => {
        res.send('Failed')
    });
        
};
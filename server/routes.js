const path = require('path');
const express = require('express');
const app = express();
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

const db = require('./mysql');

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

    // Get routes:

    app.get('/email', (req, res) => {
        res.json(req.user.emails[0].value);
    });

    // Debug routes:

    app.get('/pass', authenticate, (req, res) => {
        res.send('Passed')
    });

    app.get('/fail', (req, res) => {
        res.send('Failed')
    });

    app.get('/debug', authenticate, (req, res) => {
        let query = 'SELECT * FROM `users`';

        db.query(query, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.send('Users queried.');
            };
        });
    });
};
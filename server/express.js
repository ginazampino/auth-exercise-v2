require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const passport = require('passport');
const history = require('connect-history-api-fallback');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(history());
app.use(passport.initialize());
app.use(passport.session());

app.use(session({ 
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

require('./mysql');
require('./routes')(app);

app.listen(process.env.PORT, () => {
    console.log(
        'Server is now running on: http://localhost:' + process.env.PORT
    );
});
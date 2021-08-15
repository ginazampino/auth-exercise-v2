require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const passport = require('passport');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(session({ 
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new FileStore(),
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

require('./mysql');
require('./passport');
require('./routes')(app);

app.listen(process.env.PORT, () => {
    console.log(
        'Server is now running on: http://localhost:' + process.env.PORT
    );
});
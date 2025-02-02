import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import auth from '../middlewares/auth.js';

function setupExpress(app) {
    app.engine('hbs', handlebars({ extname: 'hbs' }));
    app.set('view engine', 'hbs');

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session({ secret: 'shtekata', cookie: { secure: false, maxAge: 1800000 }, resave: false, saveUninitialized: true }))
    app.use(auth());
}

export default setupExpress;
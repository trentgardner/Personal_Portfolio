const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body });
});

module.exports = app;
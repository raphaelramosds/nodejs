const express = require('express');
const app = express();

// Setting the Template Engine EJS
// Note. It's responsible for dinamically rendering data on HTML pages
app.set('view engine', 'ejs')

// Middleware for handling static files requests, e.g. img, css, js, html, etc.
// The route /static maps the content of the directory assets
app.use('/static', express.static('assets'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Query strings
app.get('/contact', (req, res) => {
    // Express parses query strings for you and saves on req.query
    // e.g. /contact?dept=marketing&person=joe is parsed to {dept: 'marketing', person: 'joe'}
    const queryString = req.query;

    // Go to views and render the contact profile
    res.render('contact', {qs: queryString});
});

// Route params
app.get('/profile/:name', (req, res) => {
    // Get params from the request
    const { name } = req.params;

    // Go to views and render the view profile
    res.render('profile', {
        person: name
    });
});

app.listen(3000, (err) => {
    console.log('Server is running');
});
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

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route params
app.get('/profile/:name', (req, res) => {
    // Get params from the request
    const { name } = req.params;

    // Go to views and find the view profile
    res.render('profile', {
        person: name
    });
});

app.listen(3000, (err) => {
    console.log('Server is running');
});
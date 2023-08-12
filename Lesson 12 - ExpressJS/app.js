const express = require('express');
const app = express();

// Setting the Template Engine EJS
// Note. It's responsible for dinamically rendering data on HTML pages
app.set('view engine', 'ejs')

// Middlewares 

// Handles static files requests, e.g. img, css, js, html, etc.
// The route /static maps the content of the directory assets
app.use('/static', express.static('assets'));

// Body requests will be parsed as a object
app.use(express.urlencoded({ extended: true}))

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/contact', (req,res) => {
    console.log(req.body);
    res.redirect('/contact')
});

app.get('/contact', (req, res) => {
    // Query strings
    // Express parses query strings for you and saves on req.query
    // e.g. /contact?dept=marketing&person=joe is parsed to {dept: 'marketing', person: 'joe'}
    const queryString = req.query;

    // Go to views and render the contact profile
    res.render('contact', {qs: queryString});
});

app.get('/profile/:name', (req, res) => {
    // Route params
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
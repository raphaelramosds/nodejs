const express = require('express');
const app = express();

// Setting the Template Engine EJS
// Note. Template engines are responsible for dinamically
// rendering data on HTML pages
app.set('view engine', 'ejs')

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route params
app.get('/profile/:name', (req, res) => {
    const { name } = req.params;

    // Go to views and find the view profile
    res.render('profile', {
        person: name
    });
});

app.listen(3000, (err) => {
    console.log('Server is running');
});
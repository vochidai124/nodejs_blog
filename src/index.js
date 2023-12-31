const path = require('path');
const express = require('express');
const morgan  = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Configure middleware to process data from HTTP requests
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('path: ',path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
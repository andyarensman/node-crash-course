const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const morgan = require('morgan');
const Blog = require('./models/blog');

//express app
const app = express();

//connect to mongodb
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register viwe engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'});
})

//blog routes

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch(err => {
      console.log(err);
    })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog'});
})

//404 - must be at the bottom
app.use((req, res) => {
  res.status(404).render('404', { title: '404'})
})

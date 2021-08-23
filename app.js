const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes')

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
app.use(express.urlencoded({ extended: true })); //allows you to use req.body
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'});
})

//blog routes
app.use('/blogs', blogRoutes)



//404 - must be at the bottom
app.use((req, res) => {
  res.status(404).render('404', { title: '404'})
})

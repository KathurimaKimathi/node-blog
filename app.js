const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./router/blogRoutes');

// express app
const app = express();

// DB connection
const connectionURL = "mongodb+srv://<user>:<password>@ninjatuts.kvjscb4.mongodb.net/ninja-tuts?retryWrites=true&w=majority";
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((result) => app.listen(3000))
.catch((err) => console.log('Error connecting to db'));

// register view engine
app.set('view engine', 'ejs');

// Middleware and static files
app.use(express.urlencoded({ extended: true })); // this line of code helps us capture form data
app.use(express.static('public'));

// General routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
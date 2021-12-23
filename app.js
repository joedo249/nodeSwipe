const express = require('express');
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use('/img', express.static('img'));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/expertise', (req, res) => {
  res.render('expertise', { title: 'Expertise' });
});

app.get('/honoraires', (req, res) => {
  res.render('honoraires', { title: 'Honoraires' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

const express = require('express');
const mongoose = require('mongoose');


const userRoutes = require('./routes/user');
// const sauceRoutes = require('./routes/sauce');
mongoose.connect('mongodb://127.0.0.1:27017/piiquante');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});




app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use('/api/user', userRoutes);







app.use('/api/auth', userRoutes);
// app.use('/api/', sauceRoutes);

module.exports = app;
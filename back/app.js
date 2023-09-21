const express = require('express');
//Ajout
const cors = require('cors');
const mongoose = require('mongoose');
// const multer = require('multer');

const app = express();
const userRoutes = require('./routes/user');
// const sauceRoutes = require('./routes/sauce');

mongoose.connect('mongodb://127.0.0.1:27017/piiquante')
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(() => console.log('Connexion à MongoDB échouée'));
//Ajout
app.use(cors());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  //Ajout
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/auth', userRoutes);
// app.use('/api/', sauceRoutes);

//Configuration de Multer 



module.exports = app;


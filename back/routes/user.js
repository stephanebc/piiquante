const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const userCtrl = require('../controllers/user');


const urlencodeParser = bodyParser.urlencoded({ extended: false });

router.post('/signup', userCtrl.signupUsers);
router.post('/login', userCtrl.loginUsers);

module.exports = router;




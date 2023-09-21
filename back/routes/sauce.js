const express = require('express')
const bodyParser = require('body-parser');

const router = express.Router();


const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

const urlencodeParser = bodyParser.urlencoded({ extended: false });

router.get('/sauces',  sauceCtrl.getAllSauces);
router.get('/sauces/:id',  sauceCtrl.getOneSauce);
router.post('/sauces',  multer, sauceCtrl.createSauce);
router.put('/sauces/:id',  sauceCtrl.modifySauce);
router.delete('/sauces/:id',  sauceCtrl.deleteSauce);
router.post('/sauces/:id/like',  sauceCtrl.likeSauce);

module.exports = router;
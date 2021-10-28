const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controllers');


router.get('/:id' , productController.id)
router.get('/cities/city', productController.city)



module.exports = router;

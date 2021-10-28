const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controllers');


router.get('/:id' , productController.id)
router.get('/cities/city', productController.city)
router.get('/admin', productController.admin)



module.exports = router;

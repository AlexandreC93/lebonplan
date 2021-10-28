const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controllers.js');


router.get('/:id' , productController.id)
// router.get('/cities/city', productController.city)
router.post('/admin', productController.admin)



module.exports = router;

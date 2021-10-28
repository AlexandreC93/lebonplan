const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controllers.js');


// router.get('/cities/city', productController.city)
router.post('/admin', productController.admin)
router.get("/:id" , productController.getProduct)
router.put("/:id", adminControllers.updateProduct)


module.exports = router;

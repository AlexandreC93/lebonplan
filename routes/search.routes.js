const express = require('express');
const router = express.Router();

router.post('/:category', (req, res, next)=>{
    res.send('category')
})
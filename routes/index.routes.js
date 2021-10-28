const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('<p>  home </p>')
})
router.post('/get',(req,res,next)=>{
    res.json({name: "Alex"})

})

router.get('/error', (req,res, next)=>{
    res.json({error: "error"})
})

module.exports = router
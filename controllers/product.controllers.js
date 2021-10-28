const productModel = require('../models/product.model');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/upload')
    },
    filename: function (req, file, cb) {
        const date = new Date();
        cb(null, file.fieldname)
    }
})

const upload = multer({ storage: storage })


module.exports.id = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id)
        res.render("product" , {
            product : isAuthent
        })
    }
    catch (err) {
        console.log("erreur")
        res.status(500).send({ err })
    }
}

module.exports.admin = async (req, res, next) =>{
    const {title, price, description, image, cities} = req.body
    try{
        console.log("BODY >>>>>>>", req.body )
        const product = await productModel.create([{title, price, description, image, cities}])
        res.status(202).json({product})
    }

    catch (err){
        console.error(err)
        res.status(500).json({err})
    }
}

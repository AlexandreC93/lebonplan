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

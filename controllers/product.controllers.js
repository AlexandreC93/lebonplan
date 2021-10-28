const productModel = require('../models/product.model');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/')
    },
    filename: function (req, file, cb) {
        const date = new Date();
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })


module.exports.id = async (req, res) => {
    const { firstName, lastName, surname, email, password } = req.body
    try {
        const product = productModel.findById()
        res.render('product')
    }
    catch (err) {
        console.log("erreur")
        res.status(500).json({ err })
    }
}

const productModel = require('../models/product.model');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/my/my-uploads')
    },
    filename: function (req, file, cb) {

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

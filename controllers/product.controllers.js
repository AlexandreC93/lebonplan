const productModel = require('../models/product.model');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/upload')
    },
    filename: function (req, file, cb) {
        const date = new Date();
        const username = req.params.username
        cb(null, file.fieldname)
    }
})

const upload = multer({ storage: storage })


module.exports.getProduct = async (req, res, next) => {

    const product = await productModel.find()
        .then(products => {
            res.status(200).json({
                message: "Produit crée",
                product: product
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}


module.exports.admin = async (req, res, next) => {
    const { title, price, description, image, cities } = req.body
    try {
        console.log("BODY >>>>>>>", req.body)
        const product = await productModel.create([{ title, price, description, image, cities }])
        res.status(202).json({ product })
    }

    catch (err) {
        res.status(500).json({ err })
    }
}

// Ajout du produit 
module.exports.updateProduct = async (req, res) => {
    productModel.findOne({
        _id: req.params.id
    }, {
        ...req.body,
        _id: req.params.id
    })
        .then(product => {
            res.status(200).json({
                message: "Produit Ajouter",
                product: product
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Erreur lors de l'ajout du produit",
                error: err
            })
        })

}

// Supprimer un produit 
module.exports.deleteProduct = async (req, res) => {
    productModel.deleteOne({
        _id: req.params.id
    })
        .then(product => {
            res.status(200).json({
                message: "Produit supprimer ",
                product: product
            })

        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                message: "Erreur lors de la suppression du produit",
                error: err
            })
        })

}

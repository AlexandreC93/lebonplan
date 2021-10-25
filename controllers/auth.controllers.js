const userModel = require('../models/user.model')
// 4 controllers 
// npm i jsonwebtoken et require 
const jwt = require('jsonwebtoken')



// 2 s'inscrire // Quand tu es sur la page S'INSCRIRE tu m'affiche firstname lastname...
module.exports.signUp = async (req,res) => {
    const {firstName , lastName , surname , email , password} = req.body
    try {
        const user = await userModel.create({firstName , lastName , surname , email , password});
        res.status(202).json({user : user._id})
    }
    catch(err){
        const errors = signUpErrors(err)
        res.status(404).json({errors})
    }
}

// 3 se connecter // 
module.exports.signIn = async (req, res) => {
    // affichage des email et password 
    const {email , password} = req.body 

}
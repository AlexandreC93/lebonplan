const userModel = require('../models/user.model')

// npm i jsonwebtoken et require 
const jwt = require('jsonwebtoken')

// 1
// Le jwt est valable QUE 3 jours apres on va lui demander de se reconneter
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
    return jwt.sign({ id }, {
        expiresIn: maxAge
    })
};

// 2 s'inscrire // Quand tu es sur la page S'INSCRIRE tu m'affiche firstname lastname...
module.exports.signUp = async (req, res) => {
    const { firstName, lastName, surname, email, password } = req.body
    try {
        const user = userModel.create({ firstName, lastName, surname, email, password })
        res.status(202).json( user )
        console.log("youhou")
    }
    catch (err) {
        console.log("erreur")
        res.status(500).json({ err })
    }
}

// 3 se connecter // 
module.exports.signIn = async (req, res) => {
    // affichage des email et password 
    const { email, password } = req.body
    module.exports.signIn = async (req, res) => {
        try {
            const user = await userModel.login(email, password);
            const token = createToken(user._id);
            // res.cookie tu me garde dans cookiie les email et identifant il va rester activer que sur le serveur
            res.cookie('jwt', token, { httpOnly: true, maxAge });
            // si c'est ok res.status 200 on a reussi
            res.status(200).json({ user: user._id })
        } catch (err) {
            const errors = signInErrors(err);
            res.status(404).json({ errors });
        }
    }
}
// 4 Se deconnecter
module.exports.logout = async (req, res) => {
    // res.send('redirection')
    // maxAge a 1 milliseconde va disparaitre quand il va se deconnecter 
    res.cookie('jwt', '', { maxAge: 1 });
    // et il sera rediriger la page home grace a redirect
    res.redirect('/');
}
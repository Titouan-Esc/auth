// ! Appel de Express plus le Router() d'express
const router = require('express').Router();
// ? Permet de crypter mon mot de passe
const bcrypt = require('bcryptjs');
// ? La dépendance qui permet de créer un token et de l'utiliser
const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

router.get("/", (req,res) => {
    res.send('Hollo from user');
})

// TODO Ajouter une route pour enregistrer un utilisateur
router.post('/register', async (req,res) => {
    // * genere du salage pour le crypter
    const sal = await bcrypt.genSalt();
    // * Ensuite le hasher et le mélanger avec le salage
    const hashedPassword = await bcrypt.hash(req.body.password, sal);

    // * Dire de récupere la req du body
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        // * Et ensuite intégrer le résultat dans le password
        password : hashedPassword
    })

    // ! Sauvegarde le user
    const result = await user.save();
    // ! Création d'une nouvelle donnée data ou on enleve le password
    const {password, ...data} = await result.toJSON();

    // ? Afficher les données sans le mot de passe ce qui est bien niveau sécurité
    res.send(data);
})

// ? Rajouter la route /login qui sert à se connecter
router.post('/login', async (req,res) => {
    // ? 1 vérifier l'adresse de l'utilisateur
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return res.status(404).send({
            message : "User not found"
        });
    }
    
    // ? 2 vérifier que le mot de passe est valide
    if(!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(404).send({
            message : "Le mot de passe n'est pas valide"
        })
    }

    // ? 3 Créer un token de session pour l'utilisateur
    const token = jwt.sign({_id: user._id}, "secret");

    // * conserver le token dans un cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // ! Un jour en miliseconde
    });


    res.send({
        message : "Bien connecté avec une bonne authentification"
    });

})

// ? La route /user va servir de page route qui récupère les infos de l'utilisateur authentifié
router.get('/user', async (req,res) => {

    // ? Récupère le cookie sur la machine
    const cookie = req.cookies['jwt'];

    // ? Vérifier le cookie avec la méthde de jwt
    const claims = await jwt.verify(cookie, 'secret');

    // ? Si mon cookie n'est pas valide retourner une erreur
    if(!claims){
        return res.status(401).send({
            message : "Pas d'authentification"
        })
    };

    // ? Créer un utilisateur avec l'id de claims
    const user = await User.findOne({_id: claims._id});

    // ? Utiliser la décomposition ou on enlève le password en créant un objet data
    const {password, ...data} = await user.toJSON();

    res.send(data);
})

// ? Mettre fin à notre cookie, se déconnecter
router.post('/logout', async (req,res) => {
    res.cookie('jwt', '', {maxAge : 0});

    res.send({
        message : 'Vous vous êtes bien déconnecté'
    });
})

module.exports = router;
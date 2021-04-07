// ! Appel de Express plus le Router() d'express
const router = require('express').Router();
const User = require('../model/user.model');
const bcrypt = require('bcryptjs');

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

// TODO Rajouter la route login
router.post('/login', async (req,res) => {
    // ? Etapes : 1 vérifier l'adresse de l'utilisateur
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
    res.send(user)

})

module.exports = router;
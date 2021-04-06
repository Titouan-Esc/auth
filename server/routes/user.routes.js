// ! Appel de Express plus le Router() d'express
const router = require('express').Router();
const User = require('../model/user.model');
const bcrypt = require('bcryptjs');

router.get("/", (req,res) => {
    res.send('Hollo from user');
})

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

module.exports = router;
// ! Appel de Express plus le Router() d'express
const router = require('express').Router();

router.get("/", (req,res) => {
    res.send('Hollo from user');
})

module.exports = router;
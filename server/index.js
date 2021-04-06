const express = require('express');
const mongoose = require('mongoose');
// ! Importer notre dossier routes
const userRoutes = require('./routes/user.routes');

// ? DB Connection
// ! Connecter mongoose à notre data base mongodb dans un model séparé
mongoose.connect('mongodb://localhost/jwt_auth',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}, () => {
    console.log('Connected to MongoDB')
});


const app = express();

// ? Routes
// app.get('/', (req,res) => {
//     res.send('Hello there');
// })

// ! Dire à notre app d'utiliser le chemin "/api/user" pour la const userRoutes
app.use('/api/user', userRoutes);

app.listen(8000);
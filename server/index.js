const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// ? Traduit les cookies pour les lire npm i cookie-parser
const cookieParser = require('cookie-parser');


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


// ? Instanciation de mon serveur & middlewares
const app = express();
app.use(cookieParser());
// * Instaler cors et y ajouter des options
app.use(cors({
    credentials : true,
    origin : ['http://localhost:8000', 'http://localhost:3000', 'http://localhost:4200']
}));

// ! Permet de tester nos requêtes sans utiliser body-parser
app.use(express.json());


// ? Routes
// ! Dire à notre app d'utiliser le chemin "/api/user" pour la const userRoutes
app.use('/api/user', userRoutes);

app.listen(8000);
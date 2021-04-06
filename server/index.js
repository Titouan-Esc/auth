const express = require('express');
const mongoose = require('mongoose');

// ! Connecter mongoose à notre data base mongodb dans un model séparé
mongoose.connect('mongodb://localhost/jwt_auth',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}, () => {
    console.log('Connected to MongoDB')
});

const app = express();

app.get('/', (req,res) => {
    res.send('Hello there');
})

app.listen(8000);
import React, { useState } from 'react';
// ? Importer une redirection avec imbrr
import { Redirect } from 'react-router-dom'


const Register = () => {

    // ! Création des states des différentes données
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // ? Créer un state de redirect qui de base est faux
    const [redirect, setRedirect] = useState(false);

    // ! Création d'une fonction pour console.log les informations qu'on à rentré dans notre formulaire
    const submit = async (e) => {
        e.preventDefault();

        // ? Utilisation de fetch pour mon API
        await fetch('http://localhost:8000/api/user/register', {
            // ? la methode et une methode POST
            method : 'POST',
            // ? 
            headers : {'Content-Type' : 'application/json'},
            // ? Objet qu'on doit envoyer à notre server
            body : JSON.stringify({
                username,
                email,
                password
            })
        });

        // ? Quand la connection est fini le mettre en true
        setRedirect(true);
    }

    // ? Condition pour dire que si redirect est true renvoyer sur /login
    if(redirect){
        return <Redirect to="/login"/>;
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    {/* Appliquer un onChnage pour relier des set avec leur useState avec {e=>setNom(e.target.value)} */}
                    <input type="text" className="form-control" placeholder="name" required value={username} onChange={e=>setUsername(e.target.value)}/>                  

                    <input type="email" className="form-control" placeholder="email" required value={email} onChange={e=>setEmail(e.target.value)}/>                 

                    <input type="password" className="form-control" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register

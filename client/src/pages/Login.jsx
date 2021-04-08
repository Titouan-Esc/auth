import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        // ? Utilisation de fetch pour mon API
        await fetch('http://localhost:8000/api/user/login', {
            // ? la methode et une methode POST
            method : 'POST',
            // ? 
            headers : {'Content-Type' : 'application/json'},
            // ? Récupérer les cookies que nous avons créer
            credentials : 'include',
            // ? Objet qu'on doit envoyer à notre server
            body : JSON.stringify({
                email,
                password
            })
        });

        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/"/>;
    }


    return (
        <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>
                    {/* Appliquer un onChnage pour relier des set avec leur useState avec {e=>setNom(e.target.value)} */}                
                    <input type="email" className="form-control" placeholder="email" required value={email} onChange={e=>setEmail(e.target.value)}/>                 

                    <input type="password" className="form-control" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
    )
}

export default Login

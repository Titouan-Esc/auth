import React, { useState } from 'react';

const Register = () => {

    // ! Création des states des différentes données
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ! Création d'une fonction pour console.log les informations qu'on à rentré dans notre formulaire
    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/user/register', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                username,
                email,
                password
            })
        });

        const content = await response.json();

        console.log(content);

        console.log({
            username,
            email,
            password
        });
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    {/* Appliquer un onChnage pour relier des set avec leur useState avec {e=>setNom(e.target.value)} */}
                    <input type="text" className="form-control" placeholder="name" value={username} onChange={e=>setUsername(e.target.value)}/>                  

                    <input type="email" className="form-control" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>                 

                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register

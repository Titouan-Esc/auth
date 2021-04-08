import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const User = () => {

    const [username, setUsername] = useState('');


    // ? useEffect pour récupérer le cookie lors de la connection
    useEffect(() => {
        (
            async () => {
            const response = await fetch('http://localhost:8000/api/user', {
                header : {'Content-Type' : 'application/json'},
                credentials : 'include'
            })

            const content = await response.json();

            setUsername(content.username);

            }
        )()
    }, []);

    const logout = async () => {
        await fetch('http://localhost:8000/api/user/logout', {
            // ? la methode et une methode POST
            method : 'POST',
            // ? 
            headers : {'Content-Type' : 'application/json'},
            // ? Récupérer les cookies que nous avons créer
            credentials : 'include',
        });
    }

    // ? Créer une variable let link
    let link;

    // ? Faire une condition pour dire que si username n'est pas, envoyer vers login et si oui logout. Cette condition est du JSX donc du HTML avec un peu de JS
    if(!username){
        link = (
            <Link to='/login' className='btn btn-success'>Login</Link>
        )
    }else{
        link = (
            <button onClick={logout} className='btn btn-danger'>Logout</button>
        )
    }



    return (
        <div>
            {/* Reprend le username du client qui c'est connecté */}
            {username ? `Vous êtes connecté ${username}` : 'Se connecter'}
            {link}
        </div>
    )
}

export default User

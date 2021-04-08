import React, { useState, useEffect } from 'react'


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

    return (
        <div>
            {/* Reprend le username du client qui c'est connecté */}
            {username ? `Vous êtes connecté ${username}` : 'Se connecter'}
        </div>
    )
}

export default User

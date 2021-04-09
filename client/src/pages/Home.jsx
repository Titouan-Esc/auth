import React, { useContext } from 'react'
import { UserContext } from '../User.Context'

const Home = () => {
    // ? Const qui fait appel au UserContext que nous avons créé
    const {user} = useContext(UserContext);

    return (
        <div>
            {user ? (<h1>Welcome back {user.username}</h1>) : (<h1>Connecté toi gros batard de tes morts</h1>)}
        </div>
    )
}

export default Home

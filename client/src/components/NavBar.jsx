import { Link } from 'react-router-dom'
import { UserContext } from '../User.Context';
import React, {useContext} from 'react'

const NavBar = () => {

    const {user} = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">JWT-Auth</Link>
            <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav mr-auto">
                {/* Opérateur ternaire dans une fonction JSX pour faire en sorte que quand
                on est connecté on à juste User qui est affiché et inverssement lorsqu'on est pas connecté */}
                {!user ? (
                    <>
                        <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </>
                ) : (
                        <li className="nav-item">
                        <Link className="nav-link" to="/user">User</Link>
                        </li>
                )}
            </ul>
            </div>
        </nav>
    )
}

export default NavBar

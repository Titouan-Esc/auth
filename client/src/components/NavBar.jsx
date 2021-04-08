import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">JWT-Auth</Link>
            <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/user">User</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar
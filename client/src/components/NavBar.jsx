const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="www.google.com">JWT-Auth</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <a className="nav-link" href="www.google.com">Register <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="www.google.com">Login</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="www.google.com">User</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar

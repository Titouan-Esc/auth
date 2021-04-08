import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="www.google.com">JWT-Auth</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
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
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default App;

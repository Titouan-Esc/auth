import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <main className="form-signin">
            <Switch>
              <Route path = "/" exact component={Home}/>
              <Route path = "/register"  component={Register}/>
              <Route path = "/login"  component={Login}/>
              <Route path = "/user"  component={User}/>
            </Switch>
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// ? Ajouter useMemo pour la mémorisation 
import React, { useMemo, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
import { UserContext } from './User.Context';


function App() {

  const [user, setUser] = useState(null);

  // ? Permet de mémoriser la démarche à faire si la valeur ou le state de user est affecté
  const value = useMemo(()=>({user, setUser}), [user, setUser]);


  return (
    <div className="App">
        <BrowserRouter>
        {/* Utiliser UserContext ou lui passer la value du useMemo */}
          <UserContext.Provider value={value}>
            <NavBar/>
            <main className="form-signin">
              <Switch>
                <Route path = "/" exact component={Home}/>
                <Route path = "/register"  component={Register}/>
                <Route path = "/login"  component={Login}/>
                <Route path = "/user"  component={User}/>
              </Switch>
            </main>
          </UserContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// ? Ajouter useMemo pour la mémorisation 
import React, { useEffect, useMemo, useState } from 'react';
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


  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:8000/api/user', {
                  header : {'Content-Type' : 'application/json'},
                  credentials : 'include'
              })
  
              const content = await response.json();
  
              // * Condition pour savoir si le content recois un id il renvoie setUser(content)
              if(content._id) {
                  setUser(content);
              }
  
          }
      )()
  }, []);



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

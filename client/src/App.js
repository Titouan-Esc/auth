import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="form-signin">
        <Login/>
      </main>
    </div>
  );
}

export default App;

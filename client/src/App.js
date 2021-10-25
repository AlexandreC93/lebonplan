import './App.css';
import React from 'react' 
import carteFrance from './img/carte-france.jpg'
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
     <h1>Le Bon Plan</h1>
     <NavBar/>
     <img src={carteFrance}></img>
    </div>
  );
}

export default App;

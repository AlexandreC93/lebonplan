import './App.css';
import React from 'react'
import Home from './views/Home';
import UserRegister from './views/UserRegister';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import User from './views/User';
import ProductsList from './views/ProductsList';
import Search from './views/Search';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <Router>
      <div className="App">
        <FranceCarte/>
      </div>

      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/users"> <User /> </Route>
        <Route path="/users/register"> <UserRegister /> </Route>
        <Route exact path="/product"> <ProductsList/> </Route>
        <Route path="/search"> <Search/> </Route>
        <Route path="/product/admin"> <ProductForm/> </Route>
      </Switch>

    </Router>
  );
}

export default App;

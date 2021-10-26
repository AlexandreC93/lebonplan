import './App.css';
import React from 'react'
import Home from './views/Home';
import UserRegister from './views/UserRegister';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import User from './views/User';
import ProductsList from './views/ProductsList';
import Search from './views/Search';

function App() {
  return (
    <Router>
      <div className="App">
      </div>

      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/users"> <User /> </Route>
        <Route path="/users/register"> <UserRegister /> </Route>
        <Route path="/products"> <ProductsList/> </Route>
        <Route path="/search"> <Search/> </Route>
      </Switch>

    </Router>
  );
}

export default App;

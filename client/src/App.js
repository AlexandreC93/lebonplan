import './App.css';
import React from 'react'
import Home from './views/Home';
import UserRegister from './views/UserRegister';
import { BrowserRouter, Router, Switch, Link, Route } from 'react-router-dom'
import User from './views/User';
import ProductsList from './views/ProductsList';
import Search from './views/Search';
import ProductForm from './views/ProductForm';
import Error from './views/Error';
import History from './components/History';

function App() {
  return (
    
    <Router history={History}>
      <div className="App">
      </div>

      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/user"> <User /> </Route>
        <Route path="/users/register"> <UserRegister /> </Route>
        <Route exact path="/product"> <ProductsList/> </Route>
        <Route path="/search"> <Search/> </Route>
        <Route path="/product/admin"> <ProductForm/> </Route>
        <Route path="/error"> <Error/> </Route>
      </Switch>

    </Router>
  );
}

export default App;

import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Card from './components/Card';
import Default from './components/Default';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Switch>
          <Route exa ct path="/"  component={ProductList} />
          <Route path="/details"  component={Details} />
          <Route path="/store"  component={Card} />
          <Route component={Default} />
        </Switch>
        <ProductList/>
        <Details/>
        <Card/>
        <Default/>
    </React.Fragment>
    
  );
}

export default App;

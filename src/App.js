import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Card from './components/Card';
import Default from './components/Default';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={ProductList} />
          <Route path="/details"  component={Details} />
          <Route path="/store"  component={Card} />
          <Route component={Default} />
        </Switch>
        <ProductList/>
        <Details/>
        <Card/>
        <Default/>
    </BrowserRouter>
    
  );
}

export default App;

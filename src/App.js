import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Cart from './pages/Cart';

import {Provider} from 'react-redux'
import store from './store/store'

const App = () => {

  return (

    <Provider store={ store } >

      <Router> 
          <Switch> 
              <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={Home}/> 
              <Route exact path={`${process.env.PUBLIC_URL + '/about'}`} component={About}/> 
              <Route exact path={`${process.env.PUBLIC_URL + '/service'}`} component={Service}/> 
              <Route exact path={`${process.env.PUBLIC_URL + '/products'}`} component={Products}/> 
              <Route exact path={`${process.env.PUBLIC_URL + '/contact'}`} component={Contact}/> 
              <Route exact path={`${process.env.PUBLIC_URL + '/cart'}`} component={Cart}/> 
          </Switch> 
      </Router>

    </Provider>

  );
};

export default App;

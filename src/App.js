import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/shop" exact component={Shop}></Route>
      </div>
    </Router>
  );
}

export default App;

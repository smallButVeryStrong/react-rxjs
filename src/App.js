import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import Main from './pages/rx5/index';
import Rx6 from './pages/rx6/index';
import Rx7 from './pages/rx7/index';
import Rx8 from './pages/rx8/index';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component = {Main} ></Route>
      <Route exact path="/rx6" component = {Rx6} ></Route>
      <Route exact path="/rx7" component = {Rx7} ></Route>
      <Route exact path="/rx8" component = {Rx8} ></Route>
    </HashRouter>
  );
}

export default App;

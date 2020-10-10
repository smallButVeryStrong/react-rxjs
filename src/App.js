import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import Main from './pages/rx5/index';

function App() {
  return (
    <HashRouter>
      <Route exact path="/">
        <Main />
      </Route>
    </HashRouter>
  );
}

export default App;

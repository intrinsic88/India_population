import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import { Container } from '@material-ui/core';
import Login from './component/login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <Switch>

      </Switch>

    </div>
  );
}

export default App;
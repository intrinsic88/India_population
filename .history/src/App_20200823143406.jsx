import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import { Container } from '@material-ui/core';
import Login from './component/login';
import { Route, Switch, Router } from 'react-router-dom';
import { Dashboard } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <Container>
        <Router>
        <Switch>
      <Route path="/" exact render={(props) => <Login {...props} ></Login>} />
        <Route path="/Login" render={(props) => <Login {...props} ></Login>} />
        <Route path='/Dashboard' render={()=> <Dashboard />} />
        </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;

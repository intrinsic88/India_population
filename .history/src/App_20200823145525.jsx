import React from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import { Container } from '@material-ui/core';
import Login from './component/login';
import { Route, Switch, useHistory } from 'react-router-dom';
import {Dashboard} from './component/dashboard/dashboardcomponent.jsx'



function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <Container>
        <Switch>
          <Route path="/" exact render={(props) => <Login {...props} ></Login>} />
          <Route path="/Login" render={(props) => <Login {...props} ></Login>} />
          <Route path='/Dashboard' render={() => <Dashboard />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

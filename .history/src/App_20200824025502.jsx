import React from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import { Container } from '@material-ui/core';
import Login from './component/login';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/dashboard/dashboardcomponent';


function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <Container>
        
      </Container>
        <Switch>
          <Route path="/" exact render={(props) => <Login {...props} ></Login>} />
          <Route path="/Login" render={(props) => <Login {...props} ></Login>} />
          <Route path='/Dashboard' render={() => <Dashboard />} />
        </Switch>
    </div>
  );
}

export default App;

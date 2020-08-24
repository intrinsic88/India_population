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
    </div>
  );
}

export default App;

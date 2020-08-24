import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import { Container } from '@material-ui/core';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <Container>
        <Login
      </Container>
    </div>
  );
}

export default App;

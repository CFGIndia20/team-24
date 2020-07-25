import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Layout/HeaderComponent';
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';


function App() {

  const [dishes, setDishes] = useState(DISHES);

  return (
    <div>
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
      <Navbar dark color = "primary">
        <div className = "container">
          <NavbarBrand href="/">ReactJS</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes = {dishes} /> 
    </div>
  );
}

export default App;

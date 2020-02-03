import React from 'react';
import logo from './logo.svg';
import './App.css';

import  ListEmployees from './Components/ListEmployees';

import  AddEmployee from './Components/AddEmployee';
import {Link} from 'react-router-dom';



function App() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/list-employees">List Employee </Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/add-employee">Add Employee </Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/add-department">Add Department </Link>
          </li>
        </ul>
      </nav>
  );
}

export default App;


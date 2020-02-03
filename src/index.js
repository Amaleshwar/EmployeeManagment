import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie11' ; 
import 'react-app-polyfill/stable' ; 

import 'bootstrap/dist/css/bootstrap.min.css';

import  ListEmployees from './Components/ListEmployees';

import  AddEmployee from './Components/AddEmployee';

import AddDepartment from './Components/AddDepartment';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Provider} from 'react-redux';

import EmpManagementStore from './store/EmpManagementStore';
import  NotFound  from './NotFound';


ReactDOM.render(
<Provider store={EmpManagementStore}>  
    <BrowserRouter>
    <div>
        <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/list-employees" component={ListEmployees}></Route>
        <Route exact path="/add-employee" component={AddEmployee}></Route>
        <Route exact path="/add-department" component={AddDepartment}></Route>
        <Route component={NotFound}></Route>
        </Switch>
    </div>
    </BrowserRouter>
</Provider> , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
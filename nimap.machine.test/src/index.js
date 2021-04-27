import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Login from './COMPONENTS/Login Page/Login';

let userName = localStorage.getItem("userName");
if(userName){
    ReactDOM.render( 
        <BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('root'));
}
else{
    ReactDOM.render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>,document.getElementById('root'));
}







//install
//npm i bootstrap font-awesome
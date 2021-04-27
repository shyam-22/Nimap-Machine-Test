import React, { Component } from "react";
import Menu from "./COMPONENTS/Menu/Menu";

import { Route, Switch } from "react-router-dom";
import Home from "./COMPONENTS/Home Page/Home";
import User from "./COMPONENTS/User Page/User";
import Task from "./COMPONENTS/Task Page/Task";

class App extends Component {
    render() {
        return ( 
            <React.Fragment>
                <Menu/>
                    <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/task" exact component={Task}/>
                    <Route path="/user" exact component={User}/>
                    </Switch>
            </React.Fragment>   
        );
    }
}
export default App;
//Home page have 3 components ---->Navbar component,Dropdown component,Information
//                                      /   \
//                                     /     \
//                                    /       \
//                              Dropdown   Information

import React from 'react'
import {Link,withRouter} from "react-router-dom";

//Active Class-----> history = Browser/actual_path that will be history, path = a path we will pass manually
const isActive = (history,path) => {
  if(history.location.pathname === path){
      return {color : "red"}
  }
  else{
      return {color : "white"}
  }
}

const  MenuUi = (history) =>{
        return (
            <div>
              <ul className="nav nav-tabs bg-dark">
                      <li className="nav-item">
                        <Link className="nav-link" style={isActive(history,"/home")} to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" style={isActive(history,"/task")} to="/task">Task</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" style={isActive(history,"/user")} to="/user">User</Link>
                      </li>
              </ul>
            </div>
        )
}

export default  withRouter(MenuUi)



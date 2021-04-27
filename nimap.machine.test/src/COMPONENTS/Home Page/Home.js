import React, { Component } from 'react'
import Navbar from './NavBar_Component/Navbar'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
        )
    }
}

export default Home
//Home page have 3 components ---->Navbar component,Dropdown component,Information
//                                      /   \
//                                     /     \
//                                    /       \
//                              Dropdown   Information
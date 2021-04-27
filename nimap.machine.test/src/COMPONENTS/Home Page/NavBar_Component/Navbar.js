import React, { Component } from 'react'
import Dropdown from './Dropdown_Component/Dropdown'
import Information from './Information_Component/Information'

export class Navbar extends Component {
    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="col-md-6 mt-5">
                       <Dropdown/>
                   </div>
                   <div className="col-md-6">
                        <Information/>
                   </div>
               </div>
           </div>
        )
    }
}

export default Navbar

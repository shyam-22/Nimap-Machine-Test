import React, { Component } from 'react'
import { withRouter } from 'react-router'
import MenuUi from './MenuUi'

class Menu extends Component {
    render() {
        return (
            <MenuUi/>
        )
    }
}

export default withRouter(Menu)
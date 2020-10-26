import React, { Component } from 'react'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}

export default HeaderComponent

import React, { Component } from 'react'

class LabelComponent extends Component {
    render() {
        return (
            <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.name} {this.props.cost}
            </label>
        )
    }
}

export default LabelComponent
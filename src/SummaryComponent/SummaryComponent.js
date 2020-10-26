import React, { Component } from 'react';

class SummaryComponent extends Component {
    render() {
        return (
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.name}</div>
                <div className="summary__option__cost">{this.props.summaryCost}</div>
            </div>
        );
    }
}

export default SummaryComponent
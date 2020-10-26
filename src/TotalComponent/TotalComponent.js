import React, { Component } from 'react'
import { USCurrencyFormat } from '../helpers';

class TotalComponent extends Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <div className="summary__total">
              <div className="summary__total__label">{this.props.title}</div>
              <div className="summary__total__value">{USCurrencyFormat.format(total)}</div>
            </div>
        )
    }
}

export default TotalComponent

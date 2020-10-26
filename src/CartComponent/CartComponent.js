import React, { Component } from 'react';
import SummaryComponent from '../SummaryComponent/SummaryComponent'
import TotalComponent from '../TotalComponent/TotalComponent'
import { USCurrencyFormat } from '../helpers'

class CartComponent extends Component {

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <SummaryComponent
                key={idx}
                featureHash={featureHash}
                feature={feature}
                name={selectedOption.name}
                summaryCost={USCurrencyFormat.format(selectedOption.cost)}
              />
            );
          });

        return (
            <section className="main__summary">
                <h2>{this.props.title}</h2>
                {/* {this.props.children} */}
                {summary}
                <TotalComponent title={'Total'} selected={this.props.selected}/>
            </section>
        )
    }
}


export default CartComponent
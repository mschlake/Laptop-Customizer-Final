import React, { Component } from 'react'
import FeatureLabel from '../FeatureLabel/FeatureLabel'
import { USCurrencyFormat } from '../helpers'
import slugify from 'slugify';

class FeaturesComponent extends Component {
    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">  
                  <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.state.selected[this.props.feature].name}
                    onChange={e => this.updateFeature(this.props.feature, this.props.item)}
                  />
                  <FeatureLabel>
                    {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
                  </FeatureLabel>
                </div>
        )
    }
}

export default FeaturesComponent

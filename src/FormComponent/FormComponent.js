import React, { Component } from 'react'
import FieldsetComponent from '../FieldsetComponent/FieldsetComponent'
import LabelComponent from '../LabelComponent/LabelComponent'
import { USCurrencyFormat } from '../helpers'
import slugify from 'slugify';

class FormComponent extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.props.updateFeature(feature, item)}
                  />
                  <LabelComponent 
                    itemHash={itemHash} 
                    name={item.name} 
                    cost={USCurrencyFormat.format(item.cost)} 
                  />
                  
                </div>
              );
            });
      
            return (
              <FieldsetComponent key={featureHash} featureHash={featureHash} feature={feature} options={options} />
            );
          });
          return(
            <div>
                {features}
            </div>
          )
    }
}

export default FormComponent
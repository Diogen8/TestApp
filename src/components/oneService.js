import React, { Component } from 'react';
import { connect } from 'react-redux';

import { servicesDataSet } from './../data';
import * as types from './../constants/ActionTypes'

class OneServise extends Component {
    serviceChange = () => {
        let selectedService = servicesDataSet.filter(servicesDataSet =>  servicesDataSet.id === this.props.service.id)[0];
        this.props.onChangeService(selectedService);
    }

    render() {
        return (
            <div className={`oneService${this.props.isSelected ? ' selected' : ''}`} onClick={this.serviceChange}>
                <div className="oneService-name">{this.props.service.name}</div>
                <div className="oneService-price">price: {this.props.service.price}$</div>
                <div className="oneService-duration">duration: {this.props.service.durationInMinutes} min</div>
            </div>
        )
    }
}

export default connect(
  state => ({
    store: this.state
  }),
  dispatch => ({
      onChangeService: (selectedService) => {
          dispatch({type:types.CHANGE_SERVICE,payload: {selectedService: selectedService}});
      }
  })
)(OneServise);
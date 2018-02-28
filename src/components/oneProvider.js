import React, { Component } from 'react';
import { connect } from 'react-redux';

import { providersDataSet } from './../data';
import * as types from './../constants/ActionTypes'

class OneProvider extends Component {
    
    providerChange = () => {
        let selectedProvider = providersDataSet.filter(providersDataSet =>  providersDataSet.id === this.props.provider.id)[0];
        this.props.onChangeProvider(selectedProvider);
    }
    
    render() {
        return (
            <div className={`oneProvider${this.props.isSelected ? ' selected' : ''}`} onClick={this.providerChange}>
                <div className="oneProvider-name">{this.props.provider.name}</div>
            </div>
        )
    }
}

export default connect(
  state => ({
    store: this.state
  }),
  dispatch => ({
      onChangeProvider: (selectedProvider) => {
          dispatch({type:types.CHANGE_PROVIDER,payload: {selectedProvider: selectedProvider}})
      }
  })
)(OneProvider);
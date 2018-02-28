import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from './../constants/ActionTypes'
import { providersDataSet } from './../data';

import OneProvider from './oneProvider'
import './providers.css';

class Providers extends Component {
    
    providerChange = (changeEvent) => {
        let selectedProvider = providersDataSet.filter(providersDataSet =>  providersDataSet.id === changeEvent.target.value)[0];
        this.props.onChangeProvider(selectedProvider);
    }
    
    showSummary = () => {
        this.props.onShowSummary();
    }
        
    render () {
        if (this.props.store.step !== 2) return null;
          else return (
            <div className="providers">
                {this.props.store.aviableProviders.map((provider,index) =>
                                <OneProvider key={index} provider={provider} isSelected={provider.id===this.props.store.selectedProvider.id}/> 
                )}
                <button className={`button providers-button${this.props.store.selectedProvider.length!==0 ? ' enabled' : ' disabled'}`} onClick={this.showSummary} disabled={this.props.store.selectedProvider.length!==0 ? '' : ' disabled'}>Create ivent</button>
            </div>
          )
    }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
      onChangeProvider: (selectedProvider) => {
          dispatch({type:types.CHANGE_PROVIDER,payload: {selectedProvider: selectedProvider}})
      },
      onShowSummary: () => {
           dispatch({type:types.SHOW_SUMMARY,payload: ''})
      }
  })
)(Providers);
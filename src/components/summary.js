import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from './../constants/ActionTypes'
import './summary.css';

class Summary extends Component {
    
    resetState = () => {
        this.props.onResetState();
    }

    render() {
        if (this.props.store.step !== 3) return null;
        else return(
            <div className="summary">
                <div className="summary-inner">
                    <div className="summary-message">You just selected {this.props.store.selectedService.name} with {this.props.store.selectedProvider.name}.</div>
                    <div className="summary-message">Total price will be - {this.props.store.selectedService.price}$.</div>
                    <div className="summary-message">Duration {this.props.store.selectedService.durationInMinutes} minutes.</div>
                </div> 
                <button className="summary-button button enabled" onClick={this.resetState}>Reset</button>
            </div>
        )
     }

}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
      onResetState: () => {
          dispatch({type:types.RESET_STATE,payload: ''})
      }
  })
)(Summary);
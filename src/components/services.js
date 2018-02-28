import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from './../constants/ActionTypes'
import { providersDataSet, servicesDataSet } from './../data';

import './services.css';
import OneService from './oneService'

class Services extends Component {
    
    serviceChange = () => {
        let selectedService = servicesDataSet.filter(servicesDataSet =>  servicesDataSet.id === this.props.service.id)[0];
        this.props.onChangeService(selectedService);
    }
    
    selectService = () => {
        let aviableProvidersId = servicesDataSet.filter(servicesDataSet => servicesDataSet.id === this.props.store.selectedService.id)[0].providers;
        let aviableProviders = providersDataSet.filter(providersDataSet => aviableProvidersId.includes(providersDataSet.id));
        this.props.onSelectService(aviableProviders);
    }
    

    
    render () {
        if (this.props.store.step !== 1) return null;
          else return (
            <div className="services">
                {servicesDataSet.map((service,index) =>
                                <OneService key={index} service={service} isSelected={service.id===this.props.store.selectedService.id}/> 
                )}
                <button className={`button services-button${this.props.store.selectedService.length!==0 ? ' enabled' : ' disabled'}`} onClick={this.selectService} disabled={this.props.store.selectedService.length!==0 ? '' : ' disabled'}>Select</button>
            </div>
          )
    }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
      onChangeService: (selectedService) => {
          dispatch({type:types.CHANGE_SERVICE,payload: {selectedService: selectedService}});
      },
      onSelectService: (aviableProviders) => {
          dispatch({type:types.SELECT_SERVICE,payload: {aviableProviders: aviableProviders}})
      }
  })
)(Services);
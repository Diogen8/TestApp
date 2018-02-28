import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as types from './constants/ActionTypes'






const initialState = {
    aviableProviders: [],
    selectedService: [],
    selectedProvider: [],
    step: 1
}

function selectService(state = initialState, action) {
    switch(action.type) {
        case types.CHANGE_SERVICE:{
            return {
                ...state,
                selectedService: action.payload.selectedService,
                selectedProvider: [],
                
            };
        }
        case types.SELECT_SERVICE:{
            return {
                ...state,
                aviableProviders : action.payload.aviableProviders,
                step: 2
                
            };
        }
        case types.CHANGE_PROVIDER: {
            return {
                ...state,
                selectedProvider: action.payload.selectedProvider
            }
        }
        case types.SHOW_SUMMARY: {
            return {
                ...state,
                step:3
            }
        }
        case types.RESET_STATE: {
            return initialState;
        }
        default:
            return initialState;
    }
    
}

const store = createStore(selectService);


ReactDOM.render(
  <Provider store={store}>
        <App />    
  </Provider>,
  document.getElementById('root')
);



registerServiceWorker();

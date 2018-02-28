import React, { Component } from 'react';
import { connect } from 'react-redux';

import Services from './components/services'
import Providers from './components/providers'
import Summary from './components/summary'

class App extends Component {
  componentDidMount(){
    document.title = "TestApp"
  }
    
  render() {
      return (
        <div className="wrapper">
            <div className="card">
                <div className="card__header">
                    <h5>Services</h5>
                </div>
                <div className={`card__block${this.props.store.step === 1 ? '' : ' hidden'}`}>
                    <Services />
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    <h5>Providers</h5>
                </div>
                <div className={`card__block${this.props.store.step === 2 ? '' : ' hidden'}`}>
                    <Providers />
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    <h5>Summary</h5>
                </div>
                <div className={`card__block${this.props.store.step === 3 ? '' : ' hidden'}`}>
                    <Summary />
                </div>
            </div>
        </div>
      );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({

  })
)(App);
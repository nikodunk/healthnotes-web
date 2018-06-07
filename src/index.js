import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
// import { Switch } from 'react-router'
 import { Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import demo from './assets/demo.gif'

const history = createHistory()
const store = configureStore();

export default class App extends Component{

  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePINChange = this.handlePINChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      phone: '',
      pin: '',
      loggedIn: false,
    };
  }

  handleUsernameChange(e){
    this.setState({phone: e.target.value});
  }

  handlePINChange(e) {
     this.setState({pin: e.target.value}); 
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({loggedIn: true})
  }

  render() {
    return (
      <div style={{margin: 'auto', width: '100%', maxWidth: 800, marginTop: 100, textAlign: 'center', justifyContent: 'center'}}>
          { this.state.loggedIn ? 
            <ItemList 
              phone={this.state.phone} /> : null }
          { this.state.loggedIn ? 
            null :
          <div>
            <div style={{position: 'absolute', top: 0, right: 0}}>
              <LoginComponent
                      handleUsernameChange={this.handleUsernameChange} 
                      handlePINChange={this.handlePINChange} 
                      handleSubmit={this.handleSubmit}
                      component={LoginComponent}
                      phone={this.state.phone}
                      pin={this.state.pin} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
              <div style={{paddingTop: '20%', paddingLeft: '10%', paddingRight: '10%' }}>
                  <SignupComponent />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', margin: 20}}>
                  <img src={demo} style={{height: 600, borderRadius: 40}} alt={'demo'} />
              </div> 
            </div>
          </div>
          }
            
      </div>
    )
  }
}

render(
    <Provider store={store}>
    	  <Router history={history}>
        	<App />
        </Router >
    </Provider>,
    document.getElementById('app')
);


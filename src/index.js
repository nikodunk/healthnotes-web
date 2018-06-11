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
      <div style={{  textAlign: 'center', justifyContent: 'center', width: '100%'}}>
          { this.state.loggedIn ? 
            <ItemList 
              phone={this.state.phone} /> : null }
          { this.state.loggedIn ? 
            null :
          <div>
            <div style={{ borderBottom: '1px solid lightgrey', marginBottom: 80}}>
              <LoginComponent
                  handleUsernameChange={this.handleUsernameChange} 
                  handlePINChange={this.handlePINChange} 
                  handleSubmit={this.handleSubmit}
                  component={LoginComponent}
                  phone={this.state.phone}
                  pin={this.state.pin} />
            </div>
            <div style={{
                  display: 'flex', 
                  flexDirection: 'row', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center'}} >
              <div style={{ maxWidth: 300, margin: 30, marginBottom: 50 }}>
                  <SignupComponent />
              </div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                  <img src={demo} style={{height: 600, borderRadius: 40, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.6)'}} alt={'demo'} />
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


import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';
import LoginComponent from './components/LoginComponent';
// import { Switch } from 'react-router'
 import { Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { fetchData, sendPIN } from '../src/actions/items';

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
      <div>
        <h1>Simple Soap</h1>
        {this.state.loggedIn ? 
          <ItemList 
            phone={this.state.phone} /> : null }
        {this.state.loggedIn ? 
          null :
          <LoginComponent
                handleUsernameChange={this.handleUsernameChange} 
                handlePINChange={this.handlePINChange} 
                handleSubmit={this.handleSubmit}
                component={LoginComponent} /> 
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


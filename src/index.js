import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';
import { Switch } from 'react-router'
import { Link, Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = configureStore();

const App = () => (
  <div>
    <h1>Soap Notes</h1>
    <nav><Link to="/items">My Notes</Link></nav>
    <br /><br /><br />
    <Switch>
      <Route exact path="/items" component={ItemList} />
    </Switch>
  </div>
)

render(
    <Provider store={store}>
    	<Router history={history}>
        	<App />
        </Router >
    </Provider>,
    document.getElementById('app')
);

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import state from 'state';
import {CounterPage, AboutPage, Nav} from 'components'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import style from './App.css';

let store = createStore(state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter basename="/ghp-test">
            <div className={style.App}>
              <Nav />
              <Switch>
                <Route exact path="/" component={CounterPage}/>
                <Route exact path="/about" component={AboutPage}/>
              </Switch>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
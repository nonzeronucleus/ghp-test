import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from 'reducers';
import {CounterPage, AboutPage} from 'components'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';

let store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter basename="/ghp-test">
            <div>
              <Switch>
                <Route exact path="/" component={CounterPage}/>
                <Route exact path="/about" component={AboutPage}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
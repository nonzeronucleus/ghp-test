import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';
import Counter from './containers/Counter'
import './App.css';

let store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;

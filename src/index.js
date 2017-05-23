import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter  basename="/ghp-test" >
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);*/
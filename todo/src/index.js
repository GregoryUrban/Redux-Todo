import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'


const store = createStore(rootReducer)

render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  )
  

  
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import './index.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';

//   const store = createStore(reducer);

// // ReactDOM.render(<App />, document.getElementById('root'));
// const rootElement = document.getElementById("root");
// ReactDOM.render(
// <Provider store={store}>
//   <App />
// </Provider>,
// rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleToDoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App




// import React, { Component } from 'react';



// import logo from './logo.svg';
// import './App.css';

// // const store = createStore(reducer);


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
// // const rootElement = document.getElementById("root");
// // ReactDOM.render(
// // <Provider store={store}>
// //   <App />
// // </Provider>,
// // rootElement);

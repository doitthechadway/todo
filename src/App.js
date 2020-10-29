import './App.css';
import React, { Component } from 'react';
import {ToDoBanner} from './ToDoBanner';
import 'bootstrap/dist/css/bootstrap.css'; 

export default class App extends Component {
  //  Above we have created a class called App the extends the functionality of the Component class

  //  The export keyword above makes the class available for use outside of the JS file where it is created
  constructor() {

    super();

    // React components have a special property called "state". The "state" is used to define the state of data (props)

    this.state = {
      userName: "Validata",
      todoItems: [
        { action: "Move", done: false },
        { action: "Sap a sentry", done: false },
        { action: "Go invisible", done: false },
        { action: "Run Around in Circles", done: false },
        { action: "Buy a Hilux", done: true }
      ]
    }
  } //END Constructor

  render = () =>
    <div id="todoBanner">
      {/*Features 1 & 2 */}

      <ToDoBanner
        userName = {this.state.userName}
        todoItems = {this.state.todoItems}

      />
    </div>

}





































// ---------------------------- DEFAULT SCAFFOLDED CODE ----------------------------

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

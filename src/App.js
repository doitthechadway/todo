import './App.css';
import React, { Component } from 'react';
import { ToDoBanner } from './ToDoBanner';
import { ToDoRow } from './ToDoRow';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  //  Above we have created a class called App the extends the functionality of the Component class

  //  The export keyword above makes the class available for use outside of the JS file where 
  //it is created
  constructor() {

    super();

    // React components have a special property called "state". The "state" is used to define
    // the state of data (props)

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

  // -------------- Function to display table rows ----------------
  todoTableRows = (isTaskComplete) => this.state.todoItems.filter(
    x => x.done == isTaskComplete).map(y => <ToDoRow
      key = {y.action}
      myToDoItem = {y}
      callback = {this.toggleToDo}  //The callback will be invoked (executed, run) when everything in <ToDoRow> is finished AND the user clicks the input box
      // The data passed into the callback from the ToDoRow component is passed automatically into the function defined in the callback

      />
);


// Feature 4
//toggleToDo
//Function to toggle "done" property to true/false (opposite of what it was)
  //  .setState allows the in memory data to be updated
  //  When setState is invoked, React will make a new object with the changes.  Under the hood React will compare the new object with the DOM version of the object.  If there is a difference between those 2 objects then the DOM will get re-drawn (NOT a reload) and then we see the changes.

toggleToDo = (checkedToDoItem) => this.setState(
  {
    todoItems: this.state.todoItems.map(
      x => x.action == checkedToDoItem.action ? { ...x, done: !x.done} : x
    )
  }
);



  render = () =>
    <div id="todoBanner">
      {/*Features 1 & 2 */}

      <ToDoBanner
        userName={this.state.userName}
        todoItems={this.state.todoItems}
      />
      {/*Features 3 & 4*/}
      <table className="table table-striped table-bordered">
        <thead>
          <th>Description</th>
          <th>Mark Complete</th>
        </thead>
        <tbody>
          {this.todoTableRows(false)}
        </tbody>
      </table>
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

import React, {Component} from 'react';


// FEATURES 1 AND 2



export class ToDoBanner extends Component {
  render = () =>
  <h4 className="bg-primary text-white text-center p-2">

<div>
      {this.props.userName}'s To-Do List:
      <p> {this.props.todoItems.filter(x => !x.done).length} unfinished items</p>
      </div>

      
  </h4>
};
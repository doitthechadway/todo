import React, {Component} from 'react';


// FEATURES 3 AND 4



export class ToDoRow extends Component {
  render = () =>



  <tr>
      <td>
            {this.props.myToDoItem.action}
      </td>
      <td>
            <input type="checkbox"
                  checked={this.props.myToDoItem.done}
                  onChange={() => this.props.callback(this.props.myToDoItem)} />
      </td>
  </tr>



}
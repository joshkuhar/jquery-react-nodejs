'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Rows from './rows';
import Tiles from './tiles';

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      colors: []
    }
  }
  componentDidMount() {
    this.setState({
      colors: this.props.colors
    })
  }
  onDelete(id) {
    console.log(id)
  }
  render() {
    return (
      <div>
        <table className='table-container'>
          <thead className='thead-container'>
            <tr>
              <th>Color</th>
            </tr>
          </thead>
            <Rows 
              colors={this.state.colors}
              onDelete={this.onDelete}
            />
       </table>
       <Tiles colors={this.state.colors} />
      </div>
    
      )
  }
}


export default Table

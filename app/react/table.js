'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Rows from './rows';
import Tiles from './tiles';

class Table extends React.Component {
  constructor(props){
    super(props)
    this.onDelete = this.onDelete.bind(this)
    this.state = {
      colors: []
    }
  }
  componentDidMount() {
    this.setState({
      colors: this.props.colors
    })
  }
  onDelete(colorId) {
    fetch('/colors/'+colorId, { method: 'DELETE' })
      .then( (res) => res )
      .then( () => {
        var colors = this.state.colors
        for(var i in colors){
          if(colorId == colors[i].id){
            colors.splice(i, 1)
          }
        }
        this.setState({
          colors: colors
        })
        return
      })
      .catch( (err) => {
        console.log(err)
      })
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

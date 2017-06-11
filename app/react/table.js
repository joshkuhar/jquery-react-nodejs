'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Rows from './rows';

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
  removeColor(colorId){
    var colors = this.state.colors
    for(var i in colors){
      if(colorId == colors[i].id){
        colors.splice(i, 1)
      }
    }
    this.setState({
      colors: colors
    })    
  }
  onDelete(colorId) {
    fetch('/colors/'+colorId, { 
      method: 'DELETE' 
    })
    .then( (res) => {
      // With fetch, 500
      // must be handled manually
      if(!res.ok){
        throw Error(res.statusText)
      }
      return res
    })
    .then( () => {
      this.removeColor(colorId)
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
         <div className='react-header'>React Component</div>
          <Rows 
            colors={this.state.colors}
            onDelete={this.onDelete}
          />
       </table>
      </div>
    
      )
  }
}


export default Table

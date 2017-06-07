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
    // *********
    // this is where the data enters the
    // React component, via this.props.colors
    // *********
    this.setState({
      colors: this.props.colors
    })
  }
  onDelete(color) {
    console.log(color, this.state.colors)
    const colors = this.state.colors
    for(var i in colors){
      if(color == colors[i]){
        colors.splice(i, 1)
      }
    }
    this.setState({
      colors: colors
    })

    // **********
    // This is where React handles the networking 
    // from inside the component. 
    // Data does not leave the component. It's a 
    // blackhole. The only thing the data can do
    // from inside is be destoryed or altered. It can not 
    // get back out or passed back to the JQuery component. 
    // **********
    // fetch('/colors/'+colorId, { method: 'DELETE' })
    //   .then( (res) => res )
    //   .then( () => {
    //     var colors = this.state.colors
    //     // ************
    //     // Because data can not get back to the DOM
    //     // the state is managed inside the component. 
    //     // Note, be careful where you manipulate state in 
    //     // the fetch event loop. Fetch ingnores 500. Fetch 
    //     // ignores 500. Fetch ignores 500.
    //     // Below is a good link to explain things a bit more
    //     // https://www.tjvantoll.com/2015/09/13/fetch-and-errors
    //     // ************
    //     for(var i in colors){
    //       if(colorId == colors[i].id){
    //         colors.splice(i, 1)
    //       }
    //     }
    //     this.setState({
    //       colors: colors
    //     })
    //     return
    //   })
    //   .catch( (err) => {
    //     console.log(err)
    //   })
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

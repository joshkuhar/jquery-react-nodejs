'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Tiles extends React.Component {
  render() {
    let tiles = this.props.colors.map( (color) => {
      return <div
          className='tile'
          style={ {backgroundColor: color.color} } 
          key={color.id}
          id={color.id}
          ></div>
    })
    return (
        <div className='tiles'>{tiles}</div>
      )
  }
}

export default Tiles


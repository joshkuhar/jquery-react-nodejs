'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Tiles extends React.Component {
  render() {
    let tiles = this.props.colors.map( (color, index) => {
      return <div
          className='tile'
          style={ {backgroundColor: color.color} } 
          key={index}
          ></div>
    })
    return (
        <div className='tiles'>{tiles}</div>
      )
  }
}

export default Tiles


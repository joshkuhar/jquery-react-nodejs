'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Tiles extends React.Component {
  render() {
    // There are several examples of map available. Some
    // omit the index parameter. It's better to keep 
    // it in.
    // In the example below, background color is passed 
    // in to allow for dynamic rendering. The rest of 
    // styling is held in the CSS file. 
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


'use strict'

import React from 'react';
import Row from './row';

class Rows extends React.Component {
  render() {
    let rows = this.props.colors.map( (color, index) => {
      return <Row 
          key={index}
          color={color.color}
          onDelete={this.props.onDelete}
          colorId={color.id}
          />
    })
    return (
        <tbody>{rows}</tbody>
      )
  }
}


export default Rows

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Row extends React.Component {
  render() {
    return (
        <tr>
          <td 
            className='td-color'
            style={ {backgroundColor: this.props.color} }
          >
            {this.props.color}
          </td>
          <td 
            className='table-data td-click' 
            onClick={ () => this.props.onDelete( this.props.colorId ) } 
          >
              delete
          </td>
        </tr>
      )
  }
}

export default Row

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Row extends React.Component {
  render() {
    const colorId = this.props.colorId
    return (
        <tr>
          <td className='td-color'>
            {this.props.color}
          </td>
          <td className='table-data td-click' 
            onClick={ () => this.props.onDelete( colorId ) } >
              delete
          </td>
        </tr>
      )
  }
}




export default Row

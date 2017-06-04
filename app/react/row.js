'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Row extends React.Component {
  render() {
    const id = this.props.id
    return (
        <tr className='table-row'>
          <td className='table-data td-color'>
            {this.props.color}
          </td>
          <td className='table-data td-flavor'>
            {this.props.flavor}
          </td>
          <td className='table-data td-click' 
            onClick={ () => this.props.onDelete(id)}>
              delete
          </td>
        </tr>
      )
  }
}


export default Row

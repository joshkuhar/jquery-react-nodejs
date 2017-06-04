'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Row extends React.Component {
  render() {
    const id = this.props.id
    const background = this.props.background ? this.props.background : 'white';
    const styles = {
      borderWidth: '.05em',
      borderStyle: 'solid',
      borderColor: 'lightGrey',
      borderRadius: '5px',
      padding: '.3em',
      backgroundColor: background      
    }
    return (
        <tr>
          <td style={styles}>
            {this.props.color}
          </td>
          <td className='table-data td-click' 
            onClick={ () => this.props.onDelete( id ) } >
              delete
          </td>
        </tr>
      )
  }
}




export default Row

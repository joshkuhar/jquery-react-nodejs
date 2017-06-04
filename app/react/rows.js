import React from 'react';
import ReactDOM from 'react-dom';

import Row from './row';

class Rows extends React.Component {
  render() {
    let rows = this.props.colors.map( (color) => {
      return <Row 
            key={color.id}
            color={color.color}
            onDelete={this.props.onDelete}
            id={color.id}
            background={color.background}
          />
    })
    return (
        <tbody>{rows}</tbody>
      )
  }
}


export default Rows
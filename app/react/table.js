'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Rows from './rows';

class Table extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			colors: []
		}
	}
	componentDidMount() {
		this.setState({
			colors: this.props.colors
		})
	}
	onDelete(id) {
		console.log(id)
	}
	render() {
		return (
			  <table>
			  	<thead>
			  		<tr>
							<th>Color</th>
							<th>Flavor</th>
						</tr>
					</thead>
						<Rows 
							colors={this.state.colors}
							onDelete={this.onDelete}
						/>
			 </table>
		
			)
	}
}

export default Table

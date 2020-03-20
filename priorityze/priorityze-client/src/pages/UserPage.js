import  React, {Component} from 'react';

import { data } from '../data/data'

export default class UserPage extends Component {
	renderData = () => {
		console.log(data)
	}
	render() {
		return (
			<React.Fragment>
				{this.renderData()}
			</React.Fragment>
		)
	}
}


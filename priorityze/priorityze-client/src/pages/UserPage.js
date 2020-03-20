import  React, {Component} from 'react';

import { data } from '../data/data'
import GoalsList from '../components/GoalsList'

export default class UserPage extends Component {
	render() {
		return (
			<React.Fragment>
			User Page
				<GoalsList goals={ data } />
			</React.Fragment>
		)
	}
}

//this page will connect to the store
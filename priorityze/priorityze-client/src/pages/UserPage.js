import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { data } from '../data/data';
import GoalsList from '../components/GoalsList';

class UserPage extends Component {
	state = {
		sortBy: "sortByDeadline",
		data: data,
		sortedData: data
	}
	addGoal = () => {

	}
	markGoalCompleted = () => {

	}
	handleSortBy = () => {
		//sort by alpha, deadline(default), importance, #steps remaining(tbi), date added(tbi)
		
	}
	handleGoalClick = () => {

	}
	renderGoals = () => {
		return (
			<GoalsList goals={ this.state.sortedData } />
		)
	}
	renderNoGoals = () => {
		
	}
	render() {
		return (
			<React.Fragment>
			User Page
				{ !!this.state.data.length && this.renderGoals() }
			</React.Fragment>
		)
	}

	componentDidMount = () => {
		this[this.state.sortBy]();
	}

	sortByDeadline = () => {
		this.setState({
			sortedData: this.state.data.sort((a,b) => a.deadline.getTime() - b.deadline.getTime())
		})
	}
}

export default connect()(UserPage)
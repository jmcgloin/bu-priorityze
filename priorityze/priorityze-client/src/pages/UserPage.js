import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { data } from '../data/data';
import GoalsList from '../components/GoalsList';

class UserPage extends Component {
	state = {
		sortBy: "sortByImportance",
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
	renderButtons = () => {
		const sorts = ["sortByAlphabetic", "sortByImportance", "sortByDeadline"]
		return Array(sorts.length).fill("").map((button,i) => {
			return <button key={ i } onClick={ () => this[sorts[i]]() } >{ sorts[i].split("By")[1] }</button>
		})
	}
	renderGoals = () => {
		return (
			<React.Fragment>
			<div className="button-section flex flex-column">
				<p>Sort By</p>
				<div className="buttons">
					{this.renderButtons()}
				</div>
			</div>
				<GoalsList goals={ this.state.sortedData } />
			</React.Fragment>
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

	sortByAlphabetic = () => {
		this.setState({
			sortedData: this.state.data.sort((a,b) => (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0)
		})
	}

	sortByImportance = () => {
		this.setState({
			sortedData: this.state.data.sort((a,b) => a.importance - b.importance)
		})
	}
}

export default connect()(UserPage)
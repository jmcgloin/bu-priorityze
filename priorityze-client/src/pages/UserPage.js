import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { data } from '../data/data';
import GoalsList from '../components/GoalsList';

class UserPage extends Component {
	state = {
		sortBy: "sortByDeadline",
		goals: [],
		sortedGoals: []
	}
	addGoal = () => {

	}
	markGoalCompleted = () => {

	}
	handleGoalClick = () => {

	}
	renderButtons = () => {
		const sorts = ["sortByAlphabetic", "sortByImportance", "sortByDeadline"]
		return Array(sorts.length).fill("").map((button,i) => {
			return <button key={ i } onClick={ () => this[sorts[i]]() } disabled={ this.state.sortBy === sorts[i] } >{ sorts[i].split("By")[1] }</button>
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
			<GoalsList goals={ this.state.sortedGoals } />
			</React.Fragment>
		)
	}
	renderNoGoals = () => {
		return (
			<React.Fragment>
				no goals
			</React.Fragment>
		)
	}
	render() {
		return (
			<React.Fragment>
			User Page
				{ !!this.state.goals.length && this.renderGoals() }
			</React.Fragment>
		)
	}

	componentDidMount = () => {
		this.setState({
			goals: data
		}, () => this[this.state.sortBy]())
	}

	sortByDeadline = () => {
		this.setState({
			sortBy: "sortByDeadline",
			sortedGoals: this.state.goals.sort((a,b) => a.deadline.getTime() - b.deadline.getTime())
		})
	}

	sortByAlphabetic = () => {
		this.setState({
			sortBy: "sortByAlphabetic",
			sortedGoals: this.state.goals.sort((a,b) => (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0)
		})
	}

	sortByImportance = () => {
		this.setState({
			sortBy: "sortByImportance",
			sortedGoals: this.state.goals.sort((a,b) => a.importance - b.importance)
		})
	}
}

export default connect()(UserPage)
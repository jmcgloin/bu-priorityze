import  React, {Component} from 'react';

export default class Goal extends Component {
	render() {
		return (
			<div className="goal-card">
				<p>{ this.props.title }</p>
				<p>Deadline: { this.props.deadline }</p>
				<p>Importance: { this.props.importance }</p>
			</div>
		)
	}
}

// will take a todo object as prop and will display it
import  React, {Component} from 'react';

export default class Goal extends Component {
	render() {
		const { title, deadline, importance } = this.props

		return (
			<div className="goal-card">
				<p>{ title }</p>
				<p>Deadline: { deadline.toDateString() }</p>
				<p>Importance: { importance }</p>
			</div>
		)
	}
}

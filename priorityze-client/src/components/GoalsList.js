import  React, {Component} from 'react';

import Goal from './Goal';

export default class GoalsList extends Component {
	render() {
		const renderTodos = () => {
			return this.props.goals.map(({title, deadline, importance, id}) => <Goal title={ title } deadline={ deadline } importance={ importance } key={ id } />)
		}
		return (
			<React.Fragment>
				{ renderTodos() }
			</React.Fragment>
		)
	}
}
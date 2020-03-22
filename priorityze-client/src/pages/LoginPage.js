import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { authUser } from '../actions/userActions'

class LoginPage extends Component {
	handleLogin = (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		const url = "http://localhost:3001/login"
		const credentials = {
			user: {
				email: data.get("email"),
				password: data.get("password")
			}
		}
		authUser(url, credentials)
		// console.log(a)
	}
	render() {
		return (
			<React.Fragment>
				Login Page
				<form onSubmit={ this.handleLogin } >
					<input type="text" name="email" id="email" placeholder="Enter your email address here" />
					<input type="password" name="password" id="password" placeholder="password"/>
					<button type="submit">Login</button>
				</form>
			</React.Fragment>
		)
	}
}

export default connect(state => ({ ...state }))(LoginPage)
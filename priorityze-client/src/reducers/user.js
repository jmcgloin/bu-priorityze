const user = (state = { token: null, user: {} }, action) => {
	switch(action.type) {
		case "LOGIN_USER":
			return {
				token: action.token,
				user: action.user
			}
		case "LOGOUT_USER":
			return {
				token: null,
				user: {}
			}
		default:
			return state
	}
}
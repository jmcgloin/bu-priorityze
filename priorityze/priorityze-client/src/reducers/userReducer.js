const userReducer = (state = { goals: [], userId: null }, action) => {
	switch(action.type) {
		case "AUTH_USER":
			return state
		default:
			return state
	}
}

export default userReducer
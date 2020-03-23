export const fetchGoals = () => {
	return dispatch => {
		dispatch({ type: "LOADING_GOALS" })
		fetch("http://localhost:3001/api/v1/goal")
		.then(r => r.json())
		.then(rj => dispatch({ type: "POPULATE_GOALS", goals: rj }))
	}
}
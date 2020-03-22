export function authUser(url, credentials) {
	// what to do here?
	// return dispatch => {
		// dispatch({ type: "LOGIN_USER" })
		console.log("sending")
		fetch(url, {
			method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify(credentials)
		})
		.then(r => r.json())
		.then(rj => console.log(rj))
	// }
}

export function destroyUser() {
	// what to do here?
}

export function logoutUser() {
	// what to do here?
}
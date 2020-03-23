export function authUser(url, credentials) {
	// what to do here?
	// return dispatch => {
		// dispatch({ type: "LOGIN_USER" })
		console.log("sending")
		try {
			fetch(url, {
				method: 'POST',
		    headers: {
		    	"Content-Type": "application/json",
		    	"Accept": "application/json"
		    },
		    body: JSON.stringify(credentials)
			})
			.then(r => {
				if(!r.ok) console.log("Error", r); //do something here to look for the error codes/meanings
				let h = r.headers.get("authorization")
				debugger
				console.log("OK", h)
				return r.json()
			})
			.then(rj => {
				console.log(rj)
				return rj;
			})
			.catch(e => console.log("in catch ",e))
		}
		catch(err) {
			console.log("try/catch", err)
		}
}

export function destroyUser() {
	// what to do here?
}

export function logoutUser() {
	// what to do here?
}
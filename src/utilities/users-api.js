const BASE_URL = '/api/users'

export async function signUp(userData) {
    // pausing code to wait for a response back from the server
    const res = await fetch(BASE_URL, {
        // I want to make a user
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    // if success
    // we get a true here when the status is 200
    if (res.ok) {
        return res.json()
    } else {
		// if error throw new error
		throw new Error('Invalid Sign up')
	}
}

export async function logIn(credentials) {
    const res = await fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Invalid Log In')
    }
}
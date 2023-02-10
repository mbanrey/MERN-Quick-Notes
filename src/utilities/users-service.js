import * as usersAPI from './users-api'

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)

    // for right now, this won't be a token but we will be returning one eventually
    return token
}
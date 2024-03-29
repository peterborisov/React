/**
 * @action = {type: 'LOGGED_IN_USER', payload: {name: 'FirstName', role: 'Seller'}}
 */

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGGED_IN_USER': return { ...state, ...action.payload }
        case 'LOGOUT': return action.payload
        default: return state;
    }
}

import * as actions from '../actions/actionTypes'


const isLogged = (state = false, action) => {
    switch(action.type) {
        case actions.SIGN_IN:
            return !state;
        default:
            return state;
    }
}
export default isLogged;
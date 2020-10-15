import * as actions from './actionTypes'

export const incrementAction = (n = 1) => {
    return {
        type: actions.INCREMENT,
        payload: n
    }
} 

export const decrementAction = (n = 1) => {
    return {
        type: actions.DECREMENT,
        payload: n
    }
}


export const signinAction = () => {
    return {
        type: actions.SIGN_IN
    }
} 
import * as actions from '../actions/actionTypes'

const counter = (state = 0, action) => {
    switch(action.type) {
        case actions.INCREMENT:
            return state + action.payload;
        case actions.DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
    
}
export default counter;
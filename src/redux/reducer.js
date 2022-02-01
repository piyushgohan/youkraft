import {ADD_USER} from './actionTypes';


export const reducer = (state = {} , action ) => {
    switch(action.type) {
        case ADD_USER : return {
            ...state,
            data : action.payload,
        }
        default : return state
    }
}
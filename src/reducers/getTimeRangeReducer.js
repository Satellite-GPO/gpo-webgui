import {actionTypes} from "../ActionTypes";

export default function (state = {}, action) {

    switch(action.type) {
        case actionTypes.getTimeRange:
            return {...state, ...action.time};
        default: return state;
    }
}
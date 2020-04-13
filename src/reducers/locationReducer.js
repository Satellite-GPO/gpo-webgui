import {actionTypes} from "../ActionTypes";

export default function (state = {}, action) {
    switch(action.type) {
        case actionTypes.mapClick:
            return action.position;
        default: return state;
    }

}
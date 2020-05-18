import {actionTypes} from "../ActionTypes";

/**
* locationReducer - Редуктор для работы с координатами
* @module
* */
export default function (state = {}, action) {

    switch(action.type) {
        case actionTypes.mapClick:
            return action.position;
        default: return state;
    }
}

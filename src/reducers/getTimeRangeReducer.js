import {actionTypes} from "../ActionTypes";

/**
* getTimeRangeReducer - Редуктор для работы с периодом
* @module
* */
export default function (state = {}, action) {

    switch(action.type) {
        case actionTypes.getTimeRange:
            return {...state, ...action.time}; //Merge FROM and to TIME ranges
        default: return state;
    }
}

import {combineReducers} from 'redux'

import locationReducer from './locationReducer'
import startLocationReducer from "./startLocationReducer";
import getTimeRangeReducer from "./getTimeRangeReducer";

const rootReducer = combineReducers({
    locationData: locationReducer,
    startLocation: startLocationReducer,
    getTimeRange: getTimeRangeReducer
});

export default rootReducer;
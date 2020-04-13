import {combineReducers} from 'redux'

import locationReducer from './locationReducer'
import startLocationReducer from "./startLocationReducer";

const rootReducer = combineReducers({
    locationData: locationReducer,
    startLocation: startLocationReducer
});

export default rootReducer;
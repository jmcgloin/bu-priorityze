import { combineReducers } from 'redux';

import goalsReducer from './goalsReducer';
import userReducer from './userReducer';

const rootReducer = () => {
	return combineReducers({goalsReducer, userReducer})
}

export default rootReducer();
// Dependencies
import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
})

export default rootReducer;
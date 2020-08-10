import * as types from '../actions/userType';

const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOG_IN:
      return {
        user: action.user
      }
    default:
      return state;
  }
}

export default userReducer;
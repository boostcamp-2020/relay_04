import * as types from '../actions/postType';

const initialState = {
  posts: [],
  post: {}
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case types.LOAD_POST:
      return {
        ...state,
        post: action.post
      }
    default:
      return state;
  }
}

export default postReducer;
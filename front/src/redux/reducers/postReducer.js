import * as types from '../actions/postType';

const initialState = {
  posts: [],
  post: {},
  flag: false // 클릭 시 페이지 리렌더링 하기 위한 장치
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
    case types.CHANGE_POST:
      return {
        ...state,
        flag: !state.flag
      }
    default:
      return state;
  }
}

export default postReducer;
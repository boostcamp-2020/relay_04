import * as userType from './userType';
import * as postType from './postType';

/*user*/
export const login = (user) => {
  return {
    type: userType.LOG_IN,
    user
  }
}

export const loadPosts = (posts) => {
  return {
    type: postType.LOAD_POSTS,
    posts
  }
}

export const loadPost = (post) => {
  return {
    type: postType.LOAD_POST,
    post
  }
}

export const changePost = () => {
  return {
    type: postType.CHANGE_POST
  }
}
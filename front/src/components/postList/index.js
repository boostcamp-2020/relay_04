import React, { useEffect } from "react";
import "./postList.css";
import Pagenation from '../pagenation'
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions';

import { loadPostsAPI, changeBadPost, deletePost } from '../../api';

function unit({ ...data }, authority, index, dispatch) {
  if(data.bad && !authority) return;

  const handleYes = async () => {
    try{
      await changeBadPost(data.id);
      dispatch(actions.changePost());
    }catch(error) {
      console.error(error);
      return;
    }
  }

  const handleNo = async () => {
    try {
      await deletePost(data.id);
      dispatch(actions.changePost());
    } catch(error) {
      console.error(error);
      return;
    }
  }

  return (
    <div className="postList-unit" key={`post${index}`}>
      <div>{data.id}</div>
      <div><Link to={`/viewText/${data.id}`}>{data.title}</Link></div>
      {
        authority && data.bad ?
        <>
          <button className='postList-button postList-yes' onClick={handleYes}>YES</button>
          <button className='postList-button postList-no' onClick={handleNo}>NO</button>
        </>
        : null
      } 
    </div>
  )
}
function Bulletin({ list, authority, dispatch }) {
  return list.map((data, index) => {
    return unit(data, authority, index, dispatch);
  })
}
function ListTitle() {
  return (
    <div className='postList-unit postList-title'>
      <div>번호</div>
      <div>제목</div>
    </div>
  )
}

function PostList() {
  const { authority } = useSelector((state) => state.user.user);
  const { posts, flag } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await loadPostsAPI();
      dispatch(actions.loadPosts(response.data));
      return response.data;
    }
    fetchData();
  }, [dispatch, flag]);

  return (
    <TempTaplate>
      <div id="postList-warpper">
        <ListTitle />
        <Bulletin list={posts} authority={authority} dispatch={dispatch}/>
        <button className='postList-button postList-write-button'><Link to="/write">글작성</Link></button>
        <Pagenation lastPage={10} currentPage={1} />
      </div>
    </TempTaplate>
  )
}

function TempTaplate({ children }) {
  return (
    <div>
      <header />
      <main>{children}</main>
    </div>

  )
}
export default PostList;

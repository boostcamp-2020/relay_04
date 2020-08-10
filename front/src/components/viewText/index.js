import React, {useEffect} from 'react';
import './viewText.css';
import { Link, useParams } from 'react-router-dom';

import { loadPostAPI } from '../../api';

import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/actions';

function ViewText()  {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    async function fetchData() {
      const response = await loadPostAPI(id);
      dispatch(actions.loadPost(response.data));
    }
    fetchData();
  }, [dispatch, id]);
    
  return (
    <div className = "viewText_main">
      <div className="viewText_back"><Link to='/post'> 뒤로가기 </Link></div>
      <div className="viewText_title">{post.title}</div>
      <div className="viewText_writer">{post?.User?.userid}</div>
      <div className="viewText_content">{post.content}</div>
    </div>
  );
}

export default ViewText;
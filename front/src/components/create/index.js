import React, { useState } from 'react';
import './create.css';
import { useHistory } from 'react-router-dom';

import { writePostAPI } from '../../api';

import { useSelector } from 'react-redux';

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [warning, setWarning] = useState('');
  const history = useHistory();
  const {id} = useSelector((state) => state.user.user);

  const handleCreate = async (e) => {
    e.preventDefault();
    if(title === '') {
      setWarning('제목을 입력해 주십시오');
      return;
    }
    else if(content === '') {
      setWarning('내용을 입력해 주십시오');
      return;
    }

    const response = await writePostAPI({
      id, title, content
    });
    if (response.error) setWarning('');
    else {
      history.push('/post');
    }
  }

  return(
    <form className="create_form">
      <input 
        className="create_titleInput"
        value={title}
        placeholder="제목을 입력해주세요"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        className="create_textAreaInput"
        value={content}
        placeholder="내용을 입력해주세요"
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="create_warning">{warning}</div>
      <button className="create_button" onClick={handleCreate}>작성하기</button>
    </form>
  )
}

export default Create;
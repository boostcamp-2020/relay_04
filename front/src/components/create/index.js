import React, { useState } from 'react';
import './create.css';

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [warning, setWarning] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if(title === '') {
      setWarning('제목을 입력해 주십시오');
      return;
    }
    else if(content === '') {
      setWarning('내용을 입력해 주십시오');
      return;
    }
    setWarning('')
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
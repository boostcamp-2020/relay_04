import React, { useState } from 'react';
import './signUp.css';
import { useHistory } from 'react-router-dom';

import { signUpAPI } from '../../api';

function SignUp() {
  const [id, setId] = useState('');
  const [pw, setPW] = useState('');
  const [pwCheck, setPWCheck] = useState('');
  const [warning, setWarning] = useState('');
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(id === '') {
      setWarning('아이디를 입력해 주십시오');
      return;
    }
    else if(pw !== pwCheck) {
      setWarning('입력한 비밀번호가 서로 다릅니다')
      return;
    }
    const response = await signUpAPI({
      id, pw
    });
    if(response.error)  setWarning('이미 존재하는 회원입니다');
    else history.push('/');
  };

  return(
    <form className="signUp_form">
      <input 
        className="signUp_inputId" 
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input 
        className="signUp_inputPW" 
        type="password" 
        placeholder="비밀번호를 입력해주세요"
        value={pw}
        onChange={(e) => setPW(e.target.value)}
      />
      <input 
        className="signUp_inputPWCheck" 
        type="password"
        placeholder="비밀번호를 한번 더 입력해 주세요"
        value={pwCheck}
        onChange={(e) => setPWCheck(e.target.value)}
      />
      <div className="signUp_warning">{warning}</div>
      <button 
        className="signUp_button" 
        onClick={handleSignUp}
      >SIGN UP</button>
    </form>
  )
}

export default SignUp;
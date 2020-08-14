import React, {useState} from "react";
import "./login.css";
import { useHistory } from 'react-router-dom';

import { signInAPI} from '../../api';

import { useDispatch }  from 'react-redux';
import * as actions from '../../redux/actions';

import { Route, Link } from "react-router-dom";

function Login() {
    const [id, setId] = useState('');
    const [pw, setPW] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await signInAPI({
            id, pw
        })
        if(response.error) return;
        else {
            dispatch(actions.login(response.data));
            history.push('/mainPage');
        }
    }

    return (
        <div id="login-warpper">
            <div id="login-content">
                <input
                    type="text" 
                    placeholder="아이디" 
                    className="login-input" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="login-input"
                    value={pw}
                    onChange={(e) => setPW(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>로그인</button>
                <button className="login-button"><a href="/signUp">회원가입</a></button>
                <button className="login-button"><a href="/findUser">사람 찾기</a></button>
            </div>
        </div>
    );
}

export default Login;
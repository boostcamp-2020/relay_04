import React, { useState, useCallback } from "react";
import useInput from './useInput'
import "./login.css";

const initState = {
    name: "",
    password: "",
};
function Login() {
    const [{ name, password }, onChange] = useInput(initState);
    return (
        <div id="login-warpper">
            <div id="login-content">
                <input type="text" placeholder="아이디" className="login-input"></input>
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="login-input"
                ></input>
                <button className="login-button" value={name} onChange={onChange}>로그인</button>
                <button className="login-button" value={password} onChange={onChange}>회원가입</button>
            </div>
        </div>
    );
}

export default Login;
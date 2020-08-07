import React, { Component } from 'react';
import './MainPage.css';
class MainPage extends Component {
  render(){
    return(
        <div id = "MainPages_Buttons">
            <div><button className ="MainPages_button" type="button">게시물 보기</button></div>
            <div><button className ="MainPages_button" type="button">관리자 페이지</button></div>
            <div><button className ="MainPages_button" type="button">추가작업...</button></div>
      </div>
    );
  }
}

export default MainPage;

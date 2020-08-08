import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
        <div className = "head">
            <header>
                <ul id = {"right_select"}>
                <li id="to_home">
                  <button type="button" className="button">로그아웃</button>
                </li>
                </ul>
                <hgroup>
                    <h1 className = "title"><Link to="/mainPage" >다시  모임</Link></h1>
                </hgroup>
        </header>
      </div>
    );
  }
}

export default Header;

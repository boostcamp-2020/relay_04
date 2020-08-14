import './findUser.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { postFaceDetection } from '../../api';

import { useSelector } from 'react-redux';

function FindUser(){
    const [image, setImage] = useState(null) // read
    const [imageParams, setImageParams] = useState(null) // read
    const handleChangeImg = ({target}) => {
        const file = target.files[0]
        setImageParams(file)
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) setImage(base64);
        };
        
    }
    const callApi = () => {
        postFaceDetection(imageParams)
    }
    
    
    return(
    <div className="find-user-box">
        <p className="guide-message">찾고 싶은 사람의 이미지를 등록해주세요!</p>
        <img className="find-user-img"  src={image}/>
        <input type="file" onChange={handleChangeImg}/>
        { image && <button className="upload-button" onClick={callApi}>찾기</button>}
     </div>
    )
}

export default FindUser;
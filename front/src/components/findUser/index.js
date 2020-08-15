import "./findUser.css";
import React, { useState, useEffect } from "react";
import { drawImage } from "../../utils/drawImage";
import { useHistory } from "react-router-dom";

import { postFaceDetection } from "../../api";

import { useSelector } from "react-redux";

function FindUser() {
  const [image, setImage] = useState(null); // read
  const [imageParams, setImageParams] = useState(null); // read
  const [datas, setDatas] = useState(null);
  const [check, setCheck] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
    drawText(inputValue);
  };

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const drawText = (inputValue) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText(inputValue, check.x, check.y - 2);
  };

  useEffect(() => {
    console.log(datas);
    if (datas) {
      const canvas = document.getElementById("canvas");
      drawImage(canvas, datas, image);
      canvas.addEventListener("mousemove", (e) => {
        for (const index in datas) {
          if (e.offsetX > datas[index].x && e.offsetX < datas[index].x + datas[index].width) {
            if (e.offsetY > datas[index].y && e.offsetY < datas[index].y + datas[index].height) {
              return (canvas.style.cursor = "pointer");
            }
          }
        }
        return (canvas.style.cursor = "default");
      });
      canvas.addEventListener("mousedown", (e) => {
        setCheck(false);
        for (const index in datas) {
          if (e.offsetX > datas[index].x && e.offsetX < datas[index].x + datas[index].width) {
            if (e.offsetY > datas[index].y && e.offsetY < datas[index].y + datas[index].height) {
              setCheck(datas[index]);
              datas.splice(index, 1);
            }
          }
        }
        if (check) {
          console.log(`클릭했습니다.`);
        }
      });
    }
  }, [datas]);
  const handleChangeImg = ({ target }) => {
    const file = target.files[0];
    setImageParams(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) setImage(base64);
    };
  };
  const callApi = async () => {
    const result = await postFaceDetection(imageParams); // result = rois array
    setDatas(result["rois"]);
  };

  return (
    <div>
      {datas ? (
        <canvas id="canvas"></canvas>
      ) : (
        <div className="find-user-box">
          <p className="guide-message">찾고 싶은 사람의 이미지를 등록해주세요!</p>
          <img className="find-user-img" src={image} />
          <input type="file" onChange={handleChangeImg} />
          {image && (
            <button className="upload-button" onClick={callApi}>
              찾기
            </button>
          )}
        </div>
      )}
      {check ? (
        <div>
          이름을 입력하세요
          <form onSubmit={submitHandler}>
            <input onChange={inputValueHandler}></input>
          </form>
        </div>
      ) : (
        <div>{check}</div>
      )}
    </div>
  );
}

export default FindUser;

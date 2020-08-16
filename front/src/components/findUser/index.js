import "./findUser.css";
import React, { useState, useEffect } from "react";
import { drawImage } from "../../utils/drawImage";
import { useHistory } from "react-router-dom";

import { postFaceDetection } from "../../api";

import { useSelector } from "react-redux";

function FindUser() {
  const [image, setImage] = useState(null); // read
  const [imageInfo, setImageInfo] = useState(null);
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
    ctx.fillStyle = "white";
    ctx.strokeStyle = "green";
    ctx.lineWidth = 4;
    ctx.font = "32px Arial";
    ctx.strokeText(inputValue, check.x, check.y - 2);
    ctx.fillText(inputValue, check.x, check.y - 2);
  };

  useEffect(() => {
    const MAX_WIDTH = 400;
    const MAX_HEIGHT = 300;
    console.log(datas);
    if (datas) {
      const canvas = document.getElementById("canvas");
      drawImage(canvas, datas, image);
      canvas.addEventListener("mousemove", (e) => {
        for (const index in datas) {
          if (
            e.offsetX > (datas[index].x * MAX_WIDTH) / imageInfo.width &&
            e.offsetX < ((datas[index].x + datas[index].width) * MAX_WIDTH) / imageInfo.width
          ) {
            if (
              e.offsetY > (datas[index].y * MAX_HEIGHT) / imageInfo.height &&
              e.offsetY < ((datas[index].y + datas[index].height) * MAX_HEIGHT) / imageInfo.height
            ) {
              return (canvas.style.cursor = "pointer");
            }
          }
        }
        return (canvas.style.cursor = "default");
      });
      canvas.addEventListener("mousedown", (e) => {
        setCheck(false);
        for (const index in datas) {
          if (
            e.offsetX > (datas[index].x * MAX_WIDTH) / imageInfo.width &&
            e.offsetX < ((datas[index].x + datas[index].width) * MAX_WIDTH) / imageInfo.width
          ) {
            if (
              e.offsetY > (datas[index].y * MAX_HEIGHT) / imageInfo.height &&
              e.offsetY < ((datas[index].y + datas[index].height) * MAX_HEIGHT) / imageInfo.height
            ) {
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
      const image = new Image();
      const base64 = reader.result;
      image.src = base64;
      image.onload = () => {
        setImageInfo({ width: image.width, height: image.height });
      };
      if (base64) setImage(base64);
    };
  };
  const callApi = async () => {
    const result = await postFaceDetection(imageParams); // result = rois array
    setDatas(result["rois"]);
  };

  return (
    <div>
      <div className="find-user-box">
        <p className="guide-message">
          {datas ? "결과화면(박스를 클릭해 이름을 태그해주세요!)" : "찾고 싶은 사람의 이미지를 등록해주세요!"}
        </p>
        {datas ? <canvas className="find-user-img" id="canvas"></canvas> : <img className="find-user-img" src={image} />}
        {!datas && <input type="file" onChange={handleChangeImg} />}
        {!datas && image && (
          <button className="upload-button" onClick={callApi}>
            찾기
          </button>
        )}
        {datas && check ? (
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
    </div>
  );
}

export default FindUser;

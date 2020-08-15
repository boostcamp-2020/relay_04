// naver clova 사용시 사용하실 application의 client id, client secret을 받아
// 아래 변수에 할당해 주어야 합니다.
// API : clova face recognition
const client_id = 'hr1uxh0y44';
const client_secret = '0IbAFpspzC4ho6WPVLWPIzugDsmpgOZSr7wjf8gh';

const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'img/',
});
const router = express.Router();
const request = require('request');
const fs = require('fs');

function parse(res) {
  const faces = res['faces'];
  const rois = faces.reduce((acc, cur) => {
    acc.push(cur.roi);
    return acc;
  }, []);
  return { rois };
}

router.post('/', upload.single('image'), async (req, res, next) => {
  try {
    const api_url = 'https://naveropenapi.apigw.ntruss.com/vision/v1/face'; // 얼굴 감지
    const path = req.file.path;

    const _formData = {
      image: 'image',
      image: fs.createReadStream(path), // FILE 이름
    };

    const _req = request.post(
      {
        url: api_url,
        formData: _formData,
        headers: { 'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret },
        json: true,
      },
      function (err, req, body) {
        res.json(parse(body));
        fs.unlink(path, (err) => {
          if (err) throw err;
        });
      },
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

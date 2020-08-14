// naver clova 사용시 사용하실 application의 client id, client secret을 받아 
// 아래 변수에 할당해 주어야 합니다. 
// API : clova face recognition
var express = require('express');
var app = express();
var client_id = 'hr1uxh0y44';
var client_secret = '0IbAFpspzC4ho6WPVLWPIzugDsmpgOZSr7wjf8gh';
var fs = require('fs');
var bodyParser = require('body-parser');
var info = ""

const router = express.Router();

function parse(res) {
  const faces = res['faces'];
  const rois = faces.reduce(
      (acc, cur) => {
          acc.push(cur.roi);
          return acc;
      }, 
      []
  );
  return {rois};
}


app.get('/face', function (req, res) {
   var request = require('request');
   var api_url = 'https://naveropenapi.apigw.ntruss.com/vision/v1/face'; // 얼굴 감지

   var _formData = {
     image:'image',
     image: fs.createReadStream(__dirname + '/iu.jpg') // FILE 이름
   };

    var _req = request.post({url:api_url, formData:_formData,
      headers: {'X-NCP-APIGW-API-KEY-ID':client_id, 'X-NCP-APIGW-API-KEY': client_secret},
      json : true}, function(err, req, body){
          // var info = JSON.parse(body);
          info = parse(body);
          console.log(body, info);
      }).on('response', function(response) {
       
       console.log(response.statusCode) // 200
       console.log(response.headers['content-type'])
    });
    // console.log( request.head  );
    _req.pipe(res); // 브라우저로 출력
 });

 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/face app listening on port 3000!');
 });
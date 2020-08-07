const express = require('express');

const router = express.Router();

router.get('/signup', async (req, res, next) => {
  let body = req.body;
  let userid = body.id;
  let userpw = body.pw;

  // db 요청 부분
  let result = { result : true }; // db로부터 받은 object;
  
  return res.json(result);
});

router.get('/signin', async (req, res, next) => {
  let body = req.body;
  let userid = body.id;
  let userpw = body.pw;

  // db 요청 부분
  let result = { result : true }; // db로부터 받은 object;

  return res.json(result);
});

module.exports = router;

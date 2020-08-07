const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  let body = req.body;
  let id = body.id;

  // db 요청 부분
  let result = { // db로부터 받은 object;
    post : {
      id : 1,
      writer : {
	      id : 1,
        userid : "userid",
        userpw : "userpw",
        bad : false
	    },
      title : "title",
      content : "content",
      bad : false
    }
  }

  return res.json(result);
});

router.get('/write', async (req, res, next) => {
  let body = req.body;
  let userid = body.id;
  let title = body.title;
  let content = body.content;

  // db 요청 부분
  let result = { result : true }; // db로부터 받은 object;

  return res.json(result);
});

module.exports = router;
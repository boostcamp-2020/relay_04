const express = require('express');
const safeCheck = require('../safeCheck').safeCheck;

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

  let content_test = '사용자가 게시글을 작성하면 게시글 DB에 업로드하고 게시글의 내용을 형태소 분석한다. 멍멍, 왈왈 등 비속어를 걸러낸다.';
  let testBadwords = ['멍멍', '왈왈'];
  let testRes = safeCheck(testBadwords, content_test);
  if(testRes > 0)
    console.log("불건전한 단어가 포함되어 있습니다.");

  // db 요청 부분
  let result = { result : true }; // db로부터 받은 object;

  return res.json(result);
});

module.exports = router;
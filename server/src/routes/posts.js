const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  let body = req.body;
  let page = body.page;

  // db 요청 부분
  let result = { // db로부터 받은 object;
    postList : [
      {
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
      },
      {
        id : 2,
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
    ]
  }

  return res.json(result);
});

module.exports = router;

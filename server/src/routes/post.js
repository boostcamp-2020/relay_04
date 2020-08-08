const express = require('express');
const safeCheck = require('../safeCheck').safeCheck;

const Post = require('../../models/post');
const User = require('../../models/user');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'content', 'bad'],
      include: [
        {
          model: User,
          attributes: ['id', 'userid', 'bad'],
        },
      ],
    });

    return res.json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/update/:id', async (req, res, next) => {
  try{
    await Post.update({
      bad: false
    }, {
      where: {
        id: req.params.id
      }
    })

    const result = { result: true }

    return res.json(result);

  } catch(error) {
    console.error(error);
    next(error);
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
    await Post.destroy({
      where: {
        id: req.params.id
      }
    })

    const result = { result: true};

    return res.json(result);
  } catch(error) {
    console.error(error);
    next(error);
  }
})

router.post('/write', async (req, res, next) => {
  try {
    const { userid, title, content } = req.body;
    const testBadwords = ['멍멍', '왈왈', '씨발', '병신'];

    const bad = false;
    // api 사용제한 때문에 막아놓음
    //const bad = safeCheck(testBadwords, content) > 0 ? true : false;

    await Post.create({
      title,
      content,
      UserId: userid,
      bad,
    });

    const result = { result: true };

    return res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

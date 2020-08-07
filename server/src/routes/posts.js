const express = require('express');

const Post = require('../../models/post');
const User = require('../../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      attributes: ['id', 'title', 'content', 'bad'],
      include: [
        {
          model: User,
          attributes: ['id', 'userid', 'bad'],
        },
      ],
    });

    return res.json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../../models/user');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    const { id, pw } = req.body;

    const hashedPassword = await bcrypt.hash(pw, 12);

    await User.create({
      userid: id,
      userpw: hashedPassword,
      bad: false,
    });

    const result = { result: true };

    return res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 아직 passpost 로 세션-쿠키 기능 x
router.post('/signin', async (req, res, next) => {
  try {
    const { id, pw } = req.body;
    const user = await User.findOne({
      where: {
        userid: id,
      },
    });

    const isComparePassword = await bcrypt.compare(pw, user.userpw);

    if (isComparePassword) {
      const result = { result: true };
      return res.json(result);
    }
    return res.status(402).send('입력한 비밀번호가 맞지 않습니다.');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

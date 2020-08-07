const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  return res.json({ result: true });
});

module.exports = router;

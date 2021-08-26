const express = require('express');

const { scoreboard } = require('../controllers');

const router = express.Router();

router.get('/', scoreboard.get);
router.post('/', scoreboard.post);

module.exports = router;

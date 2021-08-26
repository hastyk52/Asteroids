const express = require('express');

const { scoreboard } = require('../controllers');

const router = express.Router();

// GET route wueries:
// count (default = 10)
// page (default = 1)
// wantedScores (default = highscore)
router.get('/', scoreboard.get);
router.post('/', scoreboard.post);

module.exports = router;

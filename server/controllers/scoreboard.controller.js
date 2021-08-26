const { scoreboard } = require('../services');

const { readScores, createScore } = scoreboard;

const getScores = (req, res, next) => {
  console.log('get request recieved');
  try {
    const { query } = req;
    const { count, page, wantedScores } = query;
    readScores(count, page, wantedScores)
      .then((scores) => (res.send(scores)))
      .catch(() => (res.sendStatus(400)));
  } catch (err) {
    readScores()
      .then((scores) => (res.send(scores)))
      .catch(() => (res.sendStatus(400)));
  }
};

const postScore = () => {};

module.exports = {
  get: getScores,
  post: postScore,
};

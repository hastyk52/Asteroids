const { scoreboard } = require('../../database');

const readScores = async (count = 10, page = 1, wantedScores = 'highscore') => {
  if (page > 0 && count > 0) {
    let orderBy;
    let orderMethod;
    if (wantedScores === 'highscore') {
      orderBy = 'score';
      orderMethod = 'DESC';
    } else {
      throw new Error('invaled wantedScores');
    }
    const scores = await scoreboard.read(count, (page - 1) * count, orderBy, orderMethod);
    return { count, page, scores };
  }
  throw new Error('invalid Page');
};

const createScore = async (username, score) => {
  const date = new Date();
  if (typeof username === 'string' && username !== '' && score >= 0) {
    return scoreboard.create(username, score, date);
  }
  throw new Error('invalid username or score');
};

module.exports = {
  readScores,
  createScore,
};

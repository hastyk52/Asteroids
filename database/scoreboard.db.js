const db = require('./connection.db');

const readScores = async (limit, offset, orderBy, orderMethod) => {
  const text = `SELECT *
  FROM scores
  ORDER BY ${orderBy} ${orderMethod}
  LIMIT $1 OFFSET $2`;

  const values = [limit, offset];

  const query = { text, values };

  return db.query(query)
    .then((queryResult) => (queryResult.rows))
    .catch((err) => (err));
};

const createScore = async () => {};

module.exports = {
  read: readScores,
  create: createScore,
};

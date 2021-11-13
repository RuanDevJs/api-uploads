const dotenv = require('dotenv');
const mongo = require('mongoose');

dotenv.config({
  path: '../../.env',
});

dotenv.config();

mongo.connect(process.env.DB_URL)
  .then((res) => {
    console.debug('DB', 'Connected');
  })
  .catch((res) => {
    console.debug('DB', 'Rejected');
  });

module.exports = mongo;

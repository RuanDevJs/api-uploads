const mongo = require('../DB/db');

const UserScheema = new mongo.Schema({
  name: String,
  email: String,
  password: String,
  image_path: {
    type: String,
    default: null,
  },
});

module.exports = UserScheema;

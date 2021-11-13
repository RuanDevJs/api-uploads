const mongo = require('../DB/db');
const UserSchema = require('../Schema/User');

const UsersModel = new mongo.model('Users', UserSchema);

module.exports = UsersModel;

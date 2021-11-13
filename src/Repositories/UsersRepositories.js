const UsersModel = require('../Models/User');

class UsersRepositories {
  async findAll() {
    try {
      const rows = await UsersModel.find();
      return rows;
    } catch (e) {
      return e;
    }
  }

  async findById({ id }) {
    try {
      const rows = await UsersModel.find({ _id: id });
      return rows;
    } catch (e) {
      return e;
    }
  }

  async findByEmail({ email }) {
    try {
      const rows = await UsersModel.find({ email: email });
      return rows;
    } catch (e) {
      return e;
    }
  }

  async create({ name, password, email }) {
    try {
      const CreateUser = new UsersModel({
        name: name,
        email: email,
        password: password,
      });

      const rows = await CreateUser.save();
      return rows;
    } catch (e) {
      return e;
    }
  }

  async login({ email, password }) {
    try {
      const rows = await UsersModel.find({ email: email, password: password });
      return rows;
    } catch (e) {
      return e;
    }
  }

  async update_img(id, image_path) {
    try {
      const rows = await UsersModel.findByIdAndUpdate(id, { image_path: image_path });
      return rows;
    } catch (e) {
      return e;
    }
  }
}

module.exports = new UsersRepositories();

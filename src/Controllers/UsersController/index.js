const UsersRepositories = require('../../Repositories/UsersRepositories');

class UsersController {
  async index(req, res) {
    try {
      const rows = await UsersRepositories.findAll();
      return res.status(200).json(rows);
    } catch {
      const rows = await UsersRepositories.findAll();
      return res.status(400).json(rows);
    }
  }

  async find(req, res) {
    const { id } = req.params;
    try {
      const rows = await UsersRepositories.findById({ id });
      return res.status(200).json(rows);
    } catch {
      const rows = await UsersRepositories.findById();
      return res.status(400).json(rows);
    }
  }

  async store(req, res) {
    try {
      const { name, email, password } = req.body;

      const findByEmail = await UsersRepositories.findByEmail({ email });
      if (findByEmail.length) {
        return res.status(400).json({ error: 'This e-mail is already exists!' });
      }

      const rows = await UsersRepositories.create({ name, email, password });
      return res.status(200).json(rows);
    } catch {
      const rows = await UsersRepositories.findAll();
      return res.status(400).json(rows);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const rows = await UsersRepositories.login({ email, password });
      return res.status(200).json(rows);
    } catch {
      const rows = await UsersRepositories.findAll();
      return res.status(400).json(rows);
    }
  }

  async update_image(req, res) {
    try {
      const { image_path } = req.body;
      const { id } = req.params;
      const rows = await UsersRepositories.update_img(id, image_path);
      return res.status(200).json(rows);
    } catch {
      const rows = await UsersRepositories.findAll();
      return res.status(400).json(rows);
    }
  }
}

module.exports = new UsersController();

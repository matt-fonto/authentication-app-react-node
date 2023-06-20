const {
  createUserService,
  loginUserService,
} = require("../services/userServices");
const User = require("../models/user.model");

const createUserController = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error.message);
    // If the user already exists, return a 409 error
    // 409: Conflict
    return res.status(409).json({ error: error.message });
  }
};

const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await loginUserService(email, password);

    return res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserController,
  loginUserController,
};

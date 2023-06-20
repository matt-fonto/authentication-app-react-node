const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const createUserService = async (userData) => {
  const { username, email, password } = userData;

  const userExists = await checkIfUserExists(email);

  if (userExists) {
    throw new Error("User already exists");
  }

  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Error creating user");
  }
};

const checkIfUserExists = async (email) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    // If the user exists, return true
    return user ? true : false;
  } catch (error) {
    throw new Error("Error checking if user exists");
  }
};

const loginUserService = async (email, password) => {
  // check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // check if password matches
  const isMatch = await bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // generate token
  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

  return { user, token };
};

module.exports = {
  createUserService,
  loginUserService,
};

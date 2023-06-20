const {
  createUserController,
  loginUserController,
} = require("../controllers/userControllers");

const express = require("express");

const userRouter = express.Router();

userRouter.post("/signup", createUserController);

userRouter.post("/login", loginUserController);

module.exports = userRouter;

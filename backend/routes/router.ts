import express from "express";
import userMiddleware from "../middlewares/userMiddleware.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post(
  "/auth/register",
  userMiddleware.registerUser,
  userController.registerUser
);

router.post("/auth/login", userMiddleware.loginUser, userController.loginUser);

export default router;

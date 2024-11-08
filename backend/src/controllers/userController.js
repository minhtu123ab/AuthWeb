import userService from "../services/userService.js";

const userController = {
  registerUser: async (req, res) => {
    try {
      const { email, password, name } = req.body;
      const user = await userService.registerUser(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await userService.loginUser(email, password);
      res.status(200).json({ token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  },
};

export default userController;

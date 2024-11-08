import express from "express";
import "dotenv/config";
import connectDB from "./configs/connectDB.js";
import cors from "cors";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

connectDB();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

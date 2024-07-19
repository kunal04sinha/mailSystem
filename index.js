import express from "express";
import bodyParser from "body-parser";
import router from "./Routes";
import cors from "cors";
import { PORT } from "./config";
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running`);
});

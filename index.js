import express from "express";
import bodyParser from "body-parser";
import router from "./Routes";
import cors from "cors";
import { APP_PORT } from "./config";
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

app.listen(APP_PORT, () => {
  console.log(`Server is running`);
});

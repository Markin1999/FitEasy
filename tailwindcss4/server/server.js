import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registrazione } from "./controllers/controllers.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());

app.post("/registrazione", registrazione);

app.listen(PORT, () => {
  console.log(`server in ascolto su http://localhost:${PORT}`);
});

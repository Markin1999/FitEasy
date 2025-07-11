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

app.listen(5000, '127.0.0.1', () => {
  console.log('Server avviato su http://127.0.0.1:3000');
});

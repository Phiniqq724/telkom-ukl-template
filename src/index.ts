import express from "express";
import cors from "cors";
import { PORT } from "./global";

const app = express();

app.use(express.json());
app.use(cors());

//Start code here

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import { DB_connect } from "./config.js/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

DB_connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
  });
});

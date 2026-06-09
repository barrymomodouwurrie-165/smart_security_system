import express from "express";
import dotenv from "dotenv";
import { DB_connect } from "./config.js/db.js";
import router from "./routers.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());

app.use(
  cors({
    origin: "localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETED"],
    credentials: true,
  }),
);

app.use("/api/user", router);

const PORT = process.env.PORT || 4000;

DB_connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
  });
});

import express from "express";
import dotenv from "dotenv";
import { DB_connect } from "./config/db.js";
import router from "./routes/userRouters.js";
import eRouter from "./routes/eventRoutes.js"
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use("/api/user", router);
app.use("/api/event", eRouter);

const PORT = process.env.PORT || 4000;

DB_connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
  });
});

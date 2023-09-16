import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";

import coursesRoutes from "./routes/coursesRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();

const logFormat = "[:date[iso]] :method :url :status - :response-time ms";
app.use(morgan(logFormat));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/courses", coursesRoutes);
app.use("/api/schedules", scheduleRoutes);

app.get("/", (req, res, next) => {
  res.send("Scudler API");
});

const PORT = process.env.NODE_ENV === "production" ? 3000 : 8000;

app.listen(PORT, () =>
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .blue.underline.bold
  )
);

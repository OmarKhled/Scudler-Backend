import mongoose from "mongoose";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";

import { courses } from "./courses23.js";
import Course from "./models/courseModel.js";

dotenv.config();
connectDB();

const exportData = async () => {
  try {
    await Course.deleteMany();

    await Course.insertMany(
      courses.map((course) => ({
        course,
      }))
    );
    console.log("Data Exported!".green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}, ${err.message}`.red.inverse.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Course.deleteMany();

    console.log("Data Deleted!".red.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}, ${err.message}`.red.inverse.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  exportData();
}

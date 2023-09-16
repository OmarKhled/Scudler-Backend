import { fetchData } from "./migrate.mjs";
// import { exportData } from "./seeder.js";

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
  } catch (err) {
    console.log(`Error: ${err}, ${err.message}`.red.inverse.bold);
    process.exit(1);
  }
};

const wait = async (ms) => {
  new Promise((resolve) => setTimeout(resolve, ms));
};

while (true) {
  console.log("Getting Data From Power Campus".blue.bold);
  await fetchData();
  await exportData();

  await new Promise((r) => setTimeout(r, 1000 * 60));
}

// await exportData();
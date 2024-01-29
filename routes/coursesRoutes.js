import express from "express";
import Course from "../models/courseModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Before fetching courses");
    const response = await Course.find({});
    console.log("After fetching courses");
    const courses = response.map((course) => course.course);
    const codes = new Set();
    courses.forEach((course) => {
      codes.add(
        course.courseName
          .slice(0, 4)
          .split("")
          .filter((c) => isNaN(Number(c)))
          .join("")
      );
    });

    console.log(Array.from(codes));
    res.json({ courses });
    next();
  } catch (err) {
    console.log(err);
    throw new Error("DB Fetching error");
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

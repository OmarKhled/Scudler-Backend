import express from "express";
import Course from "../models/courseModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Before fetching courses");
    const response = await Course.find({});
    console.log("After fetching courses");
    const courses = response.map((course) => course.course);
    res.json({ courses });
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

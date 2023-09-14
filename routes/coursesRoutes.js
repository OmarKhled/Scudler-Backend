import express from "express";
import Course from "../models/courseModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await Course.find({});
    const courses = response.map((course) => course.course);
    res.json({ courses });
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

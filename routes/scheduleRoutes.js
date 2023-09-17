import express from "express";
import { getSchedules } from "../schedules/getSchedules.js";

import getCourseCombinations from "../schedules/getCourseCombinations.js";
import { groupSchedules } from "../schedules/schedulesUtil.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const data = req.body;
  /** @type {Course[]} */
  const courses = data.courses;
  const options = data.options;

  try {
    const coursesCombinations = [];

    courses.forEach((course) => {
      const courseCombinations = getCourseCombinations(course);
      coursesCombinations.push(courseCombinations);
    });

    const schedules = getSchedules(coursesCombinations, options);
    const groupedSchedules = groupSchedules(schedules);

    res.json({ schedules, groupedSchedules });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

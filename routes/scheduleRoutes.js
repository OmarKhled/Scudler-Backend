import express from "express";
import { getSchedule } from "../schedules/makeSchedule.js";

import getCombinations from "../schedules/getCombinations.js";
import { groupSchedules } from "../schedules/schedulesUtil.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const data = req.body;
  // console.log(data);
  const courses = data.courses;
  // console.log(courses);
  const options = data.options;
  const schedulesNum = data.schedulesNum;

  try {
    const coursesPossibilities = getCombinations(courses);

    // console.log(coursesPossibilities);

    let length = 0;
    coursesPossibilities.forEach((course) =>
      course.forEach((poss) => length++)
    );

    // console.log(length, "Course Possibilities");

    const schedules = getSchedule(coursesPossibilities, options);
    // console.log(schedules.length);

    const groupedSchedules = groupSchedules(schedules);

    // console.log(groupedSchedules);

    // console.log(schedules);

    // console.log(schedules.length, "schedules");

    // console.log(groupedSchedules);

    res.json({ schedules, groupedSchedules });
    // res.json({ schedules: schedules });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

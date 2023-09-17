import express from "express";
import { getSchedules } from "../schedules/getSchedules.js";

import getCourseCombinations from "../schedules/getCourseCombinations.js";
import { groupSchedules } from "../schedules/schedulesUtil.js";
import filterAvailableCourses from "../schedules/filterAvailableCourses.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  const data = req.body;
  /** @type {Course[]} */
  const courses = data.courses;
  const options = data.options;

  try {
    const availableCourses = filterAvailableCourses(courses);

    let coursesCombinations = [];
    let schedules;
    let groupedSchedules;

    // Checks if all courses already have sections after being filtered
    if (!availableCourses.find((course) => course.body.length === 0)) {
      // Getting all courses combinations
      availableCourses.forEach((course) => {
        const courseCombinations = getCourseCombinations(course);
        coursesCombinations.push(courseCombinations);
      });
      // Formulating schedules
      schedules = getSchedules(coursesCombinations, options);
      // If no schedules returned then roll back to the unfiltered courses
      if (schedules.length == 0) {
        coursesCombinations = [];

        courses.forEach((course) => {
          const courseCombinations = getCourseCombinations(course);
          coursesCombinations.push(courseCombinations);
        });
        schedules = getSchedules(coursesCombinations, options);
        groupedSchedules = groupSchedules(schedules);
      }
      groupedSchedules = groupSchedules(schedules);
    } else {
      coursesCombinations = [];

      courses.forEach((course) => {
        const courseCombinations = getCourseCombinations(course);
        coursesCombinations.push(courseCombinations);
      });

      schedules = getSchedules(coursesCombinations, options);
      groupedSchedules = groupSchedules(schedules);
    }

    res.json({ schedules, groupedSchedules });

    // Checking if possible without considering closed classes
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

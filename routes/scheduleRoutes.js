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
      console.log("scheduleRoutes.js: Courses might return a clear table");
      console.log(
        "scheduleRoutes.js: Formulating coursesCombinations for availableCourses"
      );
      // Getting all courses combinations
      availableCourses.forEach((course) => {
        const courseCombinations = getCourseCombinations(course);
        coursesCombinations.push(courseCombinations);
      });
      console.log(
        "scheduleRoutes.js: coursesCombinations for availableCourses Formulated"
      );
      console.log(
        "scheduleRoutes.js: Formulating schedules out of availableCourses"
      );
      // Formulating schedules
      schedules = getSchedules(coursesCombinations, options);
      console.log(
        "scheduleRoutes.js: schedules out of availableCourses Formulated"
      );
      console.log("scheduleRoutes.js: Checking Schedules Length");
      // If no schedules returned then roll back to the unfiltered courses
      if (schedules.length == 0) {
        console.log(
          "scheduleRoutes.js: length of 0 for schedules out of availableCourses"
        );
        coursesCombinations = [];

        console.log(
          "scheduleRoutes.js: Formulating coursesCombinations for whole courses"
        );
        courses.forEach((course) => {
          const courseCombinations = getCourseCombinations(course);
          coursesCombinations.push(courseCombinations);
        });
        console.log(
          "scheduleRoutes.js: coursesCombinations for whole courses Formulated"
        );
        console.log(
          "scheduleRoutes.js: Formulating schedules out of whole courses"
        );
        schedules = getSchedules(coursesCombinations, options);
        console.log(
          "scheduleRoutes.js: schedules out of whole courses Formulated"
        );
        groupedSchedules = groupSchedules(schedules);
        console.log(
          "scheduleRoutes.js: groupSchedules out of whole courses Formulated"
        );
      } else {
        console.log(
          "scheduleRoutes.js: Formulating groupSchedules out of availableCourses"
        );
        groupedSchedules = groupSchedules(schedules);
        console.log(
          "scheduleRoutes.js: groupSchedules out of availableCourses Formulated"
        );
      }
    } else {
      console.log("scheduleRoutes.js: Courses can't be return a clear table");
      coursesCombinations = [];

      console.log(
        "scheduleRoutes.js: Formulating coursesCombinations for whole courses -2"
      );
      courses.forEach((course) => {
        const courseCombinations = getCourseCombinations(course);
        coursesCombinations.push(courseCombinations);
      });
      console.log(
        "scheduleRoutes.js: coursesCombinations for whole courses Formulated -2"
      );
      console.log(
        "scheduleRoutes.js: Formulating schedules out of whole courses -2"
      );

      schedules = getSchedules(coursesCombinations, options);
      console.log(
        "scheduleRoutes.js: schedules out of whole courses Formulated -2"
      );
      groupedSchedules = groupSchedules(schedules);
      console.log(
        "scheduleRoutes.js: groupSchedules out of whole courses Formulated -2"
      );
    }

    console.log("scheduleRoutes.js: Reducing Response");
    groupedSchedules = groupedSchedules.slice(0, 11).map((group) => ({
      ...group,
      schedules: [group.schedules[0]],
    }));
    console.log("scheduleRoutes.js: Response Ready");

    res.json({ groupedSchedules });

    // Checking if possible without considering closed classes
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

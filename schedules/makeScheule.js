import _ from "lodash";

const TYPES = ["lecture", "lab", "tutorial"];

/**
 *
 * @param {Course[][][]} map
 * @returns {[boolean, number]}
 * @description Checks schedule for clashes
 */
const validateSchedule = (map) => {
  let valid = true;
  let fitness = 0;
  map.forEach((day) => {
    day.forEach((slot) => {
      if (slot.length > 1) {
        valid = false;
        fitness--;
      }
    });
  });
  return [valid, fitness];
};

export const makeSchedule = (coursesCombinations, options) => {
  // Schedule Day Map
  let map = [
    /* 0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17*/
    [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], // Sunday     0
    [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], // Monday     1
    [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], // Tuesday    2
    [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], // Wendsday   3
    [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], // Thursday   4
    [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], // Friday     5
    [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], // Saturday   6
  ];

  // console.log("makeSchedule.js: filling map with courses");

  // Itterates through each courseCombination snd maps it to the day map array
  coursesCombinations.forEach((course) => {
    // Iterate through the subtypes in the 'TYPES' array.
    TYPES.forEach((type) => {
      if (!_.isEmpty(course[type])) {
        course[type].slots.forEach((appointment) => {
          appointment.slot.forEach((slot) => {
            map[Number(appointment.day)][Number(slot)].push({
              name: course[type].name,
              instructor: course[type].instructor,
              type,
              online: course[type].online,
              slots: course[type].slots,
              subtype: type,
              prefix: course[type].prefix,
              available: course[type].available,
            });
          });
        });
      }
    });
  });
  // console.log("makeSchedule.js: map filled with courses");

  // console.log("makeSchedule.js: checking validity of map");
  let [valid, fitness] = validateSchedule(map);
  // console.log("makeSchedule.js: map validity checked");
  // If schedule is clear from clashes
  if (valid) {
    // console.log("makeSchedule.js: valid map passed");
    // console.log("makeSchedule.js: Sort based on empty days");
    // Sort based on empty days
    map.forEach((day) => {
      let emptyDay = true;
      day.forEach((slot) => {
        if (slot.length > 0) emptyDay = false;
      });
      if (emptyDay) fitness++;
    });

    // console.log("makeSchedule.js: Sort based on non-opened slots");
    map.forEach((day) => {
      day.forEach((slot) => {
        if (slot.length > 0 && !slot[0].available) fitness--;
      });
    });
  }
  return { fitness, schedule: map, valid };
};

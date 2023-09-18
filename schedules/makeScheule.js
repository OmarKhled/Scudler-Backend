import _ from "lodash";

const TYPES = ["lecture", "lab", "tutorial"];

// /**
//  *
//  * @param {Course[][][]} map
//  * @returns {[boolean, number]}
//  * @description Checks schedule for clashes
//  */
// const validateSchedule = (map) => {
//   let valid = true;
//   let fitness = 0;
//   map.forEach((day) => {
//     day.forEach((slot) => {
//       if (slot.length > 1) {
//         valid = false;
//         fitness--;
//       }
//     });
//   });
//   return [valid, fitness];
// };

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

  let valid = true;

  // Itterates through each courseCombination snd maps it to the day map array
  outerLoop: for (
    let courseIndex = 0;
    courseIndex < coursesCombinations.length;
    courseIndex++
  ) {
    const course = coursesCombinations[courseIndex];

    for (let typesIndex = 0; typesIndex < TYPES.length; typesIndex++) {
      const type = TYPES[typesIndex];
      if (!_.isEmpty(course[type])) {
        for (
          let appointmentIndex = 0;
          appointmentIndex < course[type].slots.length;
          appointmentIndex++
        ) {
          const appointment = course[type].slots[appointmentIndex];

          for (
            let slotIndex = 0;
            slotIndex < appointment.slot.length;
            slotIndex++
          ) {
            const slot = appointment.slot[slotIndex];
            if (map[Number(appointment.day)][Number(slot)].length > 0) {
              valid = false;
              break outerLoop;
            } else {
              map[Number(appointment.day)][Number(slot)].push({
                ...course[type],
              });
            }
          }
        }
      }
    }
  }
  // console.log("makeSchedule.js: map filled with courses");

  // console.log("makeSchedule.js: checking validity of map");
  let fitness = 0;
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

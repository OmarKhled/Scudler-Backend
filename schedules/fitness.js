import _ from "lodash";

const TYPES = ["lecture", "lab", "tutorial"];

export const fitness = (courses, options) => {
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

  // console.log(courses);

  courses.forEach((course) => {
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
            });
          });
        });
      }
    });
  });
  let fit = 0;
  map.forEach((day) => {
    day.forEach((slot) => {
      if (slot.length > 1) {
        fit--;
      }
    });
  });
  if (fit === 0) {
    // Empty days
    if (options.sortUponFreeDays) {
      map.forEach((day) => {
        let emptyDay = true;
        day.forEach((slot) => {
          if (slot.length > 0) emptyDay = false;
        });
        if (emptyDay) fit++;
      });
    }
    if (options.sortUponOnlineDays) {
      map.forEach((day) => {
        let onlineDay = true;
        day.forEach((slot) => {
          if (slot.length > 0 && !slot[0].online) onlineDay = false;
        });
        if (onlineDay) fit++;
      });
    }
    if (options.sortUponLastFreeSlots) {
      [6, 7, 8].forEach((slot) => {
        let free = true;
        map.forEach((day) => {
          if (day[slot].length > 0) {
            free = false;
          }
        });
        if (free) fit++;
      });
    }
  }
  return { fit, schedule: map };
};

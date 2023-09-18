import _ from "lodash";

const similarityScore = (map1, map2) => {
  // console.log(map1);
  const totalSlotsNum = map1.flat().filter((arr) => arr.length > 0).length;
  let score = 0;
  map1.forEach((day, dayIndex) => {
    day.forEach((map1Slot, slotIndex) => {
      const map2Slot = map2[dayIndex][slotIndex];
      if (map2Slot.length > 0 && map1Slot.length > 0) {
        if (_.isEqual(map1Slot, map2Slot)) {
          score++;
        }
      }
    });
  });
  return score / totalSlotsNum;
};

export const sortSchedules = (schedules) => {
  schedules.sort(function (a, b) {
    return b.fitness - a.fitness;
  });
  return schedules;
};

export const groupSchedules = (schedules) => {
  const clonedSchedules = [...schedules];
  const groupedSchedules = [];

  for (let i = 0; i < clonedSchedules.length; i++) {
    const schedule1 = clonedSchedules[i];

    if (schedule1) {
      let similarSchedules = [];

      for (let j = 0; j < clonedSchedules.slice(i + 1).length; j++) {
        const schedule2 = clonedSchedules.slice(i + 1)[j];
        const similarity = similarityScore(
          schedule1.schedule,
          schedule2.schedule
        );

        if (similarity >= 0.7) {
          schedule2.similarityScore = similarity;
          similarSchedules.push(schedule2);
          clonedSchedules.splice(i + j + 1, 1);
        }
      }

      if (similarSchedules.length > 0) {
        similarSchedules = [schedule1].concat(similarSchedules);
        groupedSchedules.push({
          type: "group",
          schedules: similarSchedules,
        });

        clonedSchedules.splice(i, 1);
        i--;
      }
    }
  }

  groupedSchedules.push(
    ...clonedSchedules.map((schedule) => ({
      type: "single",
      schedules: [schedule],
    }))
  );

  return groupedSchedules;
};

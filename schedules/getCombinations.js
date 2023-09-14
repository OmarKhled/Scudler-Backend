export default (courses) => {
  const coursesPossibilities = [];
  courses.forEach((course) => {
    // console.log(course.body[0].labs);
    const possibilities = [];
    course.body.forEach((section) => {
      const { lecture, tutorial, labs, sectionNumber } = section;
      const currentCombination = { lecture: {}, tutorial: {}, lab: {} };
      const currentLecture = {
        name: lecture.lectureName,
        slots: lecture.slots,
        instructor: lecture.professor,
        online: lecture.online,
        prefix: "0" + section.sectionNumber,
      };
      currentCombination.lecture = currentLecture;

      if (tutorial.length > 0) {
        // console.log("tutorials");
        // console.log(tutorial.length);
        tutorial.forEach((tut, index) => {
          // console.log("tut", index);
          if (labs.length > 0) {
            labs.forEach((lab) => {
              // console.log("labs");
              currentCombination.lab = {
                name: lab.labName,
                slots: lab.slots,
                instructor: lab.ta,
                online: lab.online,
                prefix: lab.labPrefix,
              };
              currentCombination.tutorial = {
                name: tut.tutorialName,
                slots: tut.slots,
                instructor: tut.ta,
                online: tut.online,
                prefix: tut.tutorialPrefix,
              };
              possibilities.push({ ...currentCombination });
            });
          } else {
            currentCombination.lab = {};
            currentCombination.tutorial = {
              name: tut.tutorialName,
              slots: tut.slots,
              instructor: tut.ta,
              online: tut.online,
              prefix: tut.tutorialPrefix,
            };
            possibilities.push({ ...currentCombination });
          }
        });
      } else {
        if (labs.length > 0) {
          currentCombination.tutorial = {};
          labs.forEach((lab) => {
            currentCombination.lab = {
              name: lab.labName,
              slots: lab.slots,
              instructor: lab.ta,
              online: lab.online,
              prefix: lab.labPrefix,
            };
            possibilities.push({ ...currentCombination });
          });
        } else {
          currentCombination.tutorial = {};
          currentCombination.lab = {};
          possibilities.push({ ...currentCombination });
        }
      }
    });
    coursesPossibilities.push(possibilities);
  });
  return coursesPossibilities;
};

/**
 * @typedef {Object} CombinationSection
 * @property {string} name - Section's name
 * @property {Slot[]} slots - Time Slots
 * @property {string} instructor - Instructor
 * @property {Boolean} online - Status
 * @property {string} prefix - Section's Prefix
 */

/**
 * @typedef {Object} CourseCombination
 * @property {CombinationSection} lecture - Section's Lecture - Required
 * @property {CombinationSection} tutorial - Section's Tutorial
 * @property {CombinationSection} lab - Section's Lab
 */

/**
 * @param {Lab} lab - Returns Lab Section Form of original lab
 */
const labSectionForm = (lab) => ({
  name: lab.labName,
  slots: lab.slots,
  instructor: lab.ta,
  online: lab.online,
  prefix: lab.labPrefix,
  available: lab.available,
});

/**
 * @param {Tutorial} tut - Returns Lab Section Form of original lab
 */
const tutorialSectionForm = (tut) => ({
  name: tut.tutorialName,
  slots: tut.slots,
  instructor: tut.ta,
  online: tut.online,
  prefix: tut.tutorialPrefix,
  available: tut.available,
});

/**
 * @param {Tutorial} lecture
 * @param {Section} section
 */
const lectureSectionForm = (lecture, section) => ({
  name: lecture.lectureName,
  slots: lecture.slots,
  instructor: lecture.professor,
  online: lecture.online,
  prefix: "0" + section.sectionNumber,
  available: lecture.available,
});

/**
 * @param {Course} course - The recieved Courses from User Req.
 * @description Calaculates the combination of sections for a course
 * @returns {CourseCombination[]}
 */
export default (course) => {
  console.log(
    `getCourseCombinations.js: Formulating coursesCombination for course ${
      course.courseName.split(":")[0]
    } - defaultSubType: ${course.body[0].defaultSubType}`
  );
  const courseCombinations = [];

  console.log(`getCourseCombinations.js: looping on body sections`);
  course.body.forEach((section) => {
    const { lecture, tutorial, labs, defaultSubType } = section;

    /** @type {CourseCombination} - Holds Combination of course */
    let currentCombination;
    if (defaultSubType == "lecture" && lecture) {
      currentCombination = {
        lecture: lectureSectionForm(lecture, section),
        tutorial: {},
        lab: {},
      };
    } else {
      currentCombination = {
        lecture: {},
        tutorial: {},
        lab: {},
      };
    }

    // Looping over each of the other subtypes and constructiong combinations
    if (tutorial.length > 0) {
      tutorial.forEach((tut, index) => {
        if (labs.length > 0) {
          labs.forEach((lab) => {
            currentCombination.lab = labSectionForm(lab);
            currentCombination.tutorial = tutorialSectionForm(tut);
            courseCombinations.push({ ...currentCombination });
          });
        } else {
          currentCombination.lab = {};
          currentCombination.tutorial = tutorialSectionForm(tut);
          courseCombinations.push({ ...currentCombination });
        }
      });
    } else {
      if (labs.length > 0) {
        currentCombination.tutorial = {};
        labs.forEach((lab) => {
          currentCombination.lab = labSectionForm(lab);
          courseCombinations.push({ ...currentCombination });
        });
      } else {
        currentCombination.tutorial = {};
        currentCombination.lab = {};
        courseCombinations.push({ ...currentCombination });
      }
    }
  });

  console.log(
    `getCourseCombinations.js: Body loop ended, courseCombinations formulated`
  );

  return courseCombinations;
};

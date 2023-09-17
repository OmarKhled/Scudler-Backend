/** @type {("labs" | "tutorial")[]} */
const TYPES = ["labs", "tutorial"];

/**
 * @param {Course[]} courses
 * @returns {Course[]}
 * @description filters out the unavailable courses
 */
const filterAvailableCourses = (courses) => {
  const filteredCourses = courses.map((course) => {
    let newBody = course.body
      .filter((section) => {
        const defaultSubType = section.defaultSubType;
        if (section.defaultSubType == "lecture") {
          return section[defaultSubType].available;
        } else {
          return section[defaultSubType].map((s) => s.available).includes(true);
        }
      })
      .map((section) => {
        /** @type {Section} */
        const newSection = {
          sectionNumber: section.sectionNumber,
          lecture: {},
          tutorial: [],
          labs: [],
          [section.defaultSubType]: section[section.defaultSubType],
        };
        if (course.courseName === "APBI408: Practical Applied Biotechnology") {
          console.log(newSection);
        }
        TYPES.forEach((type) => {
          const newSubType = section[type].filter(
            (subType) => subType.available
          );
          newSection[type] = newSubType;
        });

        return newSection;
      });

    newBody = newBody.filter((section) =>
      section.defaultSubType == "lecture"
        ? Object.keys(section[section.defaultSubType]).length
        : section[section.defaultSubType]?.length > 0
    );
    return {
      ...course,
      body: newBody,
    };
  });

  return filteredCourses;
};

export default filterAvailableCourses;

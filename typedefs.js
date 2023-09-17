/**
 * @typedef {Object} Slot
 * @property {number} day - Section's name
 * @property {string} room - Time Slots
 * @property {number[]} slot - Instructor
 */

/**
 * @typedef {Object} Lecture
 * @property {string} lectureName
 * @property {string} professor
 * @property {Slot[]} slots
 */

/**
 * @typedef {Object} Tutorial
 * @property {string} tutorialName
 * @property {string} tutorialPrefix
 * @property {string} ta
 * @property {Slot[]} slots
 */

/**
 * @typedef {Object} Lab
 * @property {string} labName
 * @property {string} labPrefix
 * @property {string} ta
 * @property {Slot[]} slots
 */

/**
 * @typedef {Object} Section
 * @property {number} sectionNumber - Section's name
 * @property {Lecture} lecture - Lecture
 * @property {Tutorial[]} tutorial - Tutorials
 * @property {Lab[]} labs - Labs
 */

/**
 * @typedef {Object} Course
 * @property {string} courseName - Section's name
 * @property {Section[]} body - Section
 */

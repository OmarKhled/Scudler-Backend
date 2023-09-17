/**
 * @typedef {Object} Slot
 * @property {number} day - Section's name
 * @property {string} room - Time Slots
 * @property {number[]} slot - Instructor
 */

/**
 * @typedef {Object} SubType
 * @property {Slot[]} slots
 * @property {boolean} available
 */

/**
 * @typedef {Object} Lecture
 * @property {string} lectureName
 * @property {string} professor
 * @extends SubType
 */

/**
 * @typedef {Object} Tutorial
 * @property {string} tutorialName
 * @property {string} tutorialPrefix
 * @property {string} ta
 * @extends SubType
 */

/**
 * @typedef {Object} Lab
 * @property {string} labName
 * @property {string} labPrefix
 * @property {string} ta
 * @extends SubType
 */

/**
 * @typedef {Object} Section
 * @property {number} sectionNumber - Section's name
 * @property {Lecture} lecture - Lecture
 * @property {Tutorial[]} tutorial - Tutorials
 * @property {Lab[]} labs - Labs
 * @property {"lecture" | "labs" | "tutorial"} defaultSubType
 */

/**
 * @typedef {Object} Course
 * @property {string} courseName - Section's name
 * @property {Section[]} body - Section
 */

import { makeSchedule } from "./makeScheule.js";
import { sortSchedules } from "./schedulesUtil.js";

/**
 * @param {import("./getCourseCombinations.js").CourseCombination[]} combinations
 * @param {Object} options
 * @description Returns All Possible Valid Schedules
 */
export const getSchedules = (combinations, options) => {
  let schedules = [];

  /**
   * @param {import("./getCourseCombinations.js").CourseCombination[]} combinations
   * @description Returns All Courses Combinations Combined
   */
  const allPossibleCombinations = (combinations) => {
    // Base case: If there are no combinations, return an empty array.
    if (combinations.length === 0) {
      return [];
    }
    // Base case: If there's only one combination, return each element of that combination as a separate array.
    else if (combinations.length === 1) {
      return combinations[0].map((combination) => [combination]);
    }
    // Recursive case: When there are multiple combinations to combine.
    else {
      var result = [];

      // Calculate all possible combinations of the rest of the arrays (excluding the first one).
      var allCasesOfRest = allPossibleCombinations(combinations.slice(1));

      allCasesOfRest.forEach((comb) => {
        // Iterate through each element of the first combination array.
        for (var i = 0; i < combinations[0].length; i++) {
          let combination = [];

          // If comb is not an array, convert it to an array and add to the combination.
          !Array.isArray(comb)
            ? combination.push(comb)
            : combination.push(...comb);

          // Add the current element from the first combination array.
          combination.push(combinations[0][i]);

          // Add the new combination to the result array.
          result.push(combination);
        }
      });
      return result;
    }
  };

  // Getting All Possible Combinations for schedule
  const scheduleCombinations = allPossibleCombinations(combinations);

  // Filtering Valid Combinations
  scheduleCombinations.forEach((combination) => {
    const newSchedule = makeSchedule(combination, options);
    if (newSchedule.valid) {
      schedules.push(newSchedule);
    }
  });

  schedules = sortSchedules(schedules);
  return schedules;
};

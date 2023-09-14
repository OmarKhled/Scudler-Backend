import { compareMaps } from "./schedules/schedulesUtil.js";
import schedules from "./test.js";

let exist = false;

// for (let i = 0; i < schedules.length; i++) {
//   schedules.slice(i + 1).forEach((schedule, index) => {
//     // console.log(index + i + 1);
//     if (JSON.stringify(schedule) === JSON.stringify(schedules[i])) {
//       exist = true;
//     }
//   });
//   if (exist) {
//     break;
//   }
//   // console.log(i);
// }

// console.log(schedules.length);
// console.log(exist);

const allPossibleCombinations = (combinations) => {
  if (combinations.length === 0) {
    return [];
  } else if (combinations.length === 1) {
    return combinations[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCombinations(combinations.slice(1)); // recur with the rest of array
    // console.log(allCasesOfRest);
    allCasesOfRest.forEach((comb) => {
      for (var i = 0; i < combinations[0].length; i++) {
        let combination = [];
        console.log(comb, Array.isArray(comb) ? "array" : "obj");
        !Array.isArray(comb)
          ? combination.push(comb)
          : combination.push(...comb);
        combination.push(combinations[0][i]);
        result.push(combination);
      }
    });
    return result;
  }
};
const combinations = [
  [
    { a: 1, b: 2 },
    { c: 1, d: 2 },
  ],
  [
    { a: 3, b: 4 },
    { c: 3, d: 4 },
    { e: 3, f: 4 },
  ],
  [
    { a: 5, b: 6 },
    { c: 5, d: 6 },
    { o: 5, m: 6 },
  ],
  [
    { a: 5, b: 6 },
    { c: 5, d: 6 },
    { o: 5, m: 6 },
  ],
  [
    { a: 5, b: 6 },
    { c: 5, d: 6 },
    { o: 5, m: 6 },
  ],
];

const result = allPossibleCombinations(combinations);

console.log(JSON.stringify(result));

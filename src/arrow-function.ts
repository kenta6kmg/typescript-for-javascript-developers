export { };

// let bmi: (height: number, weight: number) => number = function (
//   height: number, weight: number): number {
//   return weight / (height * height);
// }

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

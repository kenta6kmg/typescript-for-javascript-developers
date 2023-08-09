export {};

let bmi: (height: number, weight: number) => number = function (
  height: number, weight: number): number {
  return weight / (height * height);
}

let bmiArrow: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.60, 56));
console.log(bmiArrow(1.72, 60));


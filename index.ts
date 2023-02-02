import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

if (process.argv[2] === "calculateBmi") {
  const height = Number(process.argv[3]);
  const weight = Number(process.argv[4]);

  if (isNaN(height) || isNaN(weight)) {
    console.log("Error: Height and weight must be numbers");
    process.exit(1);
  }

  console.log(calculateBmi(height, weight));
}

if (process.argv[2] === "calculateExercises") {
  const exercises = process.argv.slice(3).map(Number);
  const target = Number(process.argv[process.argv.length - 1]);

  if (!exercises.every(Number.isFinite) || isNaN(target)) {
    console.log(
      "Error: All exercise durations must be numbers and target must be a number"
    );
    process.exit(1);
  }

  console.log(calculateExercises(exercises, target));
}

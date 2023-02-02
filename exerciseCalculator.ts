interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export function calculateExercises(
  hours: Array<number>,
  target: number
): Result {
  const periodLength = hours.length;
  let trainingDays = 0;
  let totalHours = 0;
  for (const hour of hours) {
    if (hour > 0) {
      trainingDays += 1;
      totalHours += hour;
    }
  }

  const average = totalHours / periodLength;
  let success = false;
  let rating = 0;
  let ratingDescription = "";
  if (average >= target) {
    success = true;
    rating = 3;
    ratingDescription = "excellent job";
  } else if (average / target >= 0.8) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "you can do better";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
}
const target = Number(process.argv[2]);
const hours = process.argv.slice(3).map(Number);

console.log(calculateExercises(hours, target));

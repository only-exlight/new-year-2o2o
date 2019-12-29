export function declensions(
  count: number,
  one: string,
  two: string,
  five: string
) {
  return count % 10 === 1 && count % 100 !== 11
    ? one
    : count % 10 >= 2 &&
      count % 10 <= 4 &&
      (count % 100 < 10 || count % 100 >= 20)
    ? two
    : five;
}

export function randomInteger(min: number, max: number) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
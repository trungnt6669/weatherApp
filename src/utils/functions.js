// Display temperature in Fahrenheit or Celsius depending on the toggle
export function displayTemp(unit, temperature) {
  if (unit === 'F') {
    return temperature;
  } else {
    return ((Number(temperature) - 32) * (5 / 9)).toFixed(2);
  }
}

// Function used to push items into array and remove first item should it exceed max
export function pushMax(arr, value, max) {
  if (arr.length >= max) {
    arr.shift();
  }
  arr.push(value);
  return arr;
}

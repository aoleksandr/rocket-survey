export default function () {
  return function (input, min, max) {
    min = parseInt(min);
    max = parseInt(max);
    for (let i = min; i < max; i++)
      input.push(i);
    return input;
  };
}

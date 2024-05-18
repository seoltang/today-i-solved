const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const numbers = input[1];
let answer = 0;

numbers.forEach((number) => {
  if (number === 1) return;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return;
  }
  answer++;
});

console.log(answer);

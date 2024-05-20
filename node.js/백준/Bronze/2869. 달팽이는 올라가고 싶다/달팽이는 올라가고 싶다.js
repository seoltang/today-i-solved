const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [up, down, height] = input;
const day = Math.floor((height - up - 1) / (up - down)) + 2;

console.log(day);

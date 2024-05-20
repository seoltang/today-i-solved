const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1);

const answers = Array.from(new Set(input)).sort((a, b) =>
  b.length === a.length ? (a > b ? 1 : -1) : a.length - b.length,
);

console.log(answers.join('\n'));

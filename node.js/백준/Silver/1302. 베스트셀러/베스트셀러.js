const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1);

const sales = new Object();

input.forEach((book) => {
  sales[book] = sales.hasOwnProperty(book) ? sales[book] + 1 : 1;
});

const answer = Object.entries(sales).reduce((acc, [book, count]) => {
  if (count > acc[1] || (count === acc[1] && book < acc[0])) return [book, count];
  return acc;
})[0];

console.log(answer);

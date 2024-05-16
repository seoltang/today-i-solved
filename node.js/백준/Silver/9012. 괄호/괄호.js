const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '))
  .flat()
  .slice(1);

const answers = input.map((str) => {
  let [left, right] = [0, 0];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') left++;
    else if (char === ')') right++;

    if (right > left) return 'NO';
  }

  return left === right ? 'YES' : 'NO';
});

console.log(answers.join('\n'));

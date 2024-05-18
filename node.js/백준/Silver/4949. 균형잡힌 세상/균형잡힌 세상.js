const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(0, -1);

const answers = input.map((string) => {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === '(' || char === '[') {
      stack.push(char);
      continue;
    }

    if (char === ')' || char === ']') {
      if (
        (char === ')' && stack[stack.length - 1] === '(') ||
        (char === ']' && stack[stack.length - 1] === '[')
      ) {
        stack.pop();
        continue;
      }

      stack.push(char);
      continue;
    }

    if (char === '.') break;
  }
  return stack.length ? 'no' : 'yes';
});

console.log(answers.join('\n'));

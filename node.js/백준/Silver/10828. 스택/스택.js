const commands = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '))
  .flat()
  .slice(1);

const stack = [];
const answers = [];

for (let index = 0; index < commands.length; index++) {
  const command = commands[index];

  switch (command) {
    case 'push':
      const number = Number(commands[++index]);
      stack.push(number);
      break;

    case 'pop':
      answers.push(stack.length ? stack.pop() : -1);
      break;

    case 'size':
      answers.push(stack.length);
      break;

    case 'empty':
      answers.push(stack.length ? 0 : 1);
      break;

    case 'top':
      answers.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(answers.join('\n'));

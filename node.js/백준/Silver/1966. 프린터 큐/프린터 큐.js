const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const count = input.shift();
const answers = [];

for (let i = 0; i < count; i++) {
  const [docCount, targetIndex] = input.shift();
  const docs = input.shift().map((priority, index) => ({ priority, index }));
  const queue = [];

  while (queue.length < docCount) {
    const doc = docs.shift();
    const isFirst = docs.every((restDoc) => restDoc.priority <= doc.priority);

    if (isFirst) queue.push(doc);
    else docs.push(doc);
  }

  answers.push(queue.findIndex(({ index }) => index === targetIndex) + 1);
}

console.log(answers.join('\n'));

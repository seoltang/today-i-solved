const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(' ').map((v) => Number(v));
const maze = input.slice(1).map((line) => line.split('').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = [[0, 0]];

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

    if (maze[nx][ny] !== 1) continue;

    maze[nx][ny] = maze[x][y] + 1;
    queue.push([nx, ny]);
  }
}

console.log(maze[n - 1][m - 1]);

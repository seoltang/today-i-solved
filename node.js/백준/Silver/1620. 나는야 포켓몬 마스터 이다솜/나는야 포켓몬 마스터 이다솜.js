const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [pokemonCount, testCount] = input.shift().split(' ').map(Number);

const pokemons = input.slice(0, pokemonCount);
const tests = input.slice(-testCount);

const book = new Map();
pokemons.forEach((pokemon, index) => {
  book.set(pokemon, index + 1);
});

const answers = tests.map((test) => {
  if (Number.isInteger(Number(test))) return pokemons[Number(test) - 1];
  return book.get(test);
});

console.log(answers.join('\n'));

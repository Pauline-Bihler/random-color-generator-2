import { argv } from 'node:process';
import randomColor from 'randomcolor';
import chalk from 'chalk';

const color = randomColor({ hue: argv[2], luminosity: argv[3] });

function genColor() {
  return randomColor();
}

let totalColumn = 31;
let totalRow = 9;
let string = '';

for (let row = 1; row <= totalRow; row++) {
  for (let column = 1; column <= totalColumn; column++) {
    if (row === 4 || row === 6) {
      if (column === 1 || column === 22) {
        string += '#####';
      }
      string += ' ';
    } else if (row === 5) {
      if (column === 7) {
        string += genColor();
      } else if (column === 1 || column === 15) {
        string += '#####';
      }
      string += ' ';
    } else if (true) {
      string += '#';
    }
  }
  string += '\n';
}
console.log('\n');

console.log(chalk.hex(color).bold(string));

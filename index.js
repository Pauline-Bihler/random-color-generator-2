import { argv } from 'node:process';
import randomColor from 'randomcolor';
import chalk from 'chalk';

const color = randomColor({ hue: argv[2], luminosity: argv[3] });

// code for the first 3 rows
const hashToRepeat = '###############################';
for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color).bold(hashToRepeat));
}

// code for the next 3 rows but with conditions
const hashToRepeatWithSpaces = `#####                     #####`;
const hashMiddle = `#####       ${color}       #####`;

for (let row = 0; row < 4; row++) {
  if (row === 1 || row === 3) {
    console.log(chalk.hex(color).bold(hashToRepeatWithSpaces));
  } else if (row === 2) {
    console.log(chalk.hex(color).bold(hashMiddle));
  }
}

// code for the last 3 rows ~ identical to the code of the first 3 rows.
const hashToRepeatBottom = '###############################';
for (let i = 0; i < 3; i++) {
  console.log(chalk.hex(color).bold(hashToRepeat));
}

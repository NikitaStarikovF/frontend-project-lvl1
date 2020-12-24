#!/usr/bin/env node

import readlineSync from 'readline-sync';
import questionName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?  ');

questionName(name);

const brainEven = (arr) => {
    let err = 0;
    let newArr = [];
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < arr.length; i++) {
        console.log(`Question: ${arr[i]}`);
        let answer = readlineSync.question(`Your answer: `);

        if (arr[i] % 2 != 0 && answer === 'no') {
            console.log(`Correct!`);
            newArr.push('+')
        }

        if (arr[i] % 2 === 0 && answer === 'yes') {
            console.log(`Correct!`);
            newArr.push('+');
        }


        if (newArr.length != i + 1) {

            console.log(`\'${answer}\' is wrong answer ;(. Correct answer was 'no'.
                 Let's try again, ${name}!`);
            err = 1;
            break;
        }

    };

    if (err === 0) console.log(`Congratulations, ${name}!`);
}

brainEven([15, 6, 7]);
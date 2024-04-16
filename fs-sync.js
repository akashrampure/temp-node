const {readFileSync, writeFileSync } = require('fs');

console.log('start');

// to read files 
const first = readFileSync('./content/first.txt', 'utf-8');

const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);


// to write to files
writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
// to append to existing file
{flag:'a'});


console.log('done with the task');
console.log('starting the next one');
const fs = require ('node:fs/promises')
const {comparacion} = require ('../CommonJS/comparacion.js')

console.log('Starting...');
fs.readFile('./Files/file.txt', 'utf8')
    .then(firstext => { 
        console.log(`First file content:\n ${firstext}`)
    })

console.log(comparacion(10,5)) // false

console.log('Reading second file...');

fs.readFile('./Files/file2.txt', 'utf8')
    .then(secondext =>{
        console.log(`Second file content:\n ${secondext}`);
    })

console.log('Finish read')
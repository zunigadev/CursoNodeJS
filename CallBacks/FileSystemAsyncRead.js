const fs = require('node:fs');

console.log('Reading file...');

/*
--CALLBACK--
(err, text) =>{
    console.log(secondtext); 
*/

fs.readFile('./Files/file.txt', 'utf-8', (err, firstext) =>{
    console.log(firstext) //Los callbacks permiten que el codigo 
} )                       //siga  ejecutandose sin esperar a que 
                          //se complete la operacion de lectura del archivo

console.log('do things while reading the file...')


console.log('Reading the second file...')

fs.readFile('./Files/file2.txt', 'utf-8', (err, secondtext) =>{
    console.log(secondtext);
})






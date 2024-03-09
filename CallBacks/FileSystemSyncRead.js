const fs = require('node:fs')

console.log('Reading file...');

const firstext = fs.readFileSync('./Files/file.txt', 'utf-8' )//Sin UTF8 respode un buffer

console.log('do things while reading the file...')

console.log(firstext)

console.log('Reading the second file...')

const  secondtext = fs.readFileSync('./Files/file2.txt', 'utf-8')

console.log(secondtext);



//SIN UTF8:
/*D:\Proyectos\CursoNodeJS>node 3.FileSystemRead.js
<Buffer 4d 75 79 20 62 75 65 6e 61 73 20 61 20 74 6f 64 6f 73 21>*/

//CON UTF8:
/*D:\Proyectos\CursoNodeJS>node 3.FileSystemRead.js
Muy buenas a todos!*/

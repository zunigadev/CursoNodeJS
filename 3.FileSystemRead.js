const fs = require('node:fs')

const text = fs.readFileSync('./file.txt', 'utf-8' )//Sin UTF8 respode un buffer

//SIN UTF8:
/*D:\Proyectos\CursoNodeJS>node 3.FileSystemRead.js
<Buffer 4d 75 79 20 62 75 65 6e 61 73 20 61 20 74 6f 64 6f 73 21>*/

//CON UTF8:
/*D:\Proyectos\CursoNodeJS>node 3.FileSystemRead.js
Muy buenas a todos!*/

console.log(text)
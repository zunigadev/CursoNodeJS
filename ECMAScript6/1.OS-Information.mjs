//import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';
import os from 'node:os';

//NOTA: Puede importarse cada  uno de los modulos de la plataforma de forma individual,
//como tambien se puede importar toda la libreria  en un solo comando.

//console.log('Nombre del sistema operativo', platform())
console.log('Nombre del sistema operativo', os.platform())

//console.log('Versión del sistema operativo', release())
console.log('Versión del sistema operativo', os.release())

//console.log('Arquitectura', arch())
console.log('Arquitectura', os.arch())

//console.log('CPUs', cpus())
console.log('CPUs', os.cpus())

//console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria libre', os.freemem() / 1024 / 1024)

//console.log('Memoria total', totalmem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)

//console.log('uptime', uptime() / 60 / 60)
console.log('uptime', os.uptime() / 60 / 60)
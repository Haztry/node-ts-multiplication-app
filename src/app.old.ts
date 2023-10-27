import { yarg } from "./config/plugins/yargs.plugin"
const fs = require('fs')




let outputMessage =''
const base = 5
const headerMessage = `
==============
Tabla del ${base}
==============
`

for (let i = 0; i<=yarg.l; i++){
    outputMessage += `${yarg.b} X ${i} = ${yarg.b * i} \n `
}

let outputmessagee =  headerMessage + outputMessage 

if (yarg.s === true) {console.log(outputmessagee);}






const outPutPath= 'outputs' //ME CREA EL ARACHIVO OUTPUTS

fs.mkdirSync(outPutPath, {recursive: true})
fs.writeFileSync(`outputs/tabla-${base}.txt`,outputMessage)
console.log("File Created");
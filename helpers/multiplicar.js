const fs = require('fs')
const colors = require('colors')


const crearArchivo = ( base = 5, listar = false ) => {
    let salida = ''
    let consola = ''

    for (let i = 1 ; i <= 10 ; i++) {
        salida += `${ base } x ${i} = ${ i * base }\n`
        consola += `${ base } ${ 'x'.green } ${i} ${ '='.green } ${ i * base }\n`
    }

    if ( listar ) {
        console.log( '============================'.green )
        console.log( `\tTabla del ${ colors.blue(base) }`.green )
        console.log( '============================'.green )
        console.log( consola )
    }

    fs.writeFile(`./salida/tabla-${ base }.txt`, salida, (err) => {
        if (err) throw err

        console.log(`archivo tabla-${ base }.txt creado`.rainbow)
    })
}

module.exports = {
    crearArchivo
}
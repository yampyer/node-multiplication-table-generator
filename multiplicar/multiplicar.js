const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`El valor introducido ${base} no es un número`)
        }

        let data = '';

        for (let i = 1; i <= limite; i++) data += `${base} * ${i} = ${base * i}\n`;

        fs.writeFile(`tablas/tabla-${base}.txt`, data, error => {
            if (error) reject(error);
            resolve(`tabla-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite) => {
    console.log('=================='.red);
    console.log(`== Tabla de ${base} ==`.red);
    console.log('=================='.red);
    for (let i = 1; i <= limite; i++) console.log(`${base} * ${i} = ${base * i}`);
}

module.exports = {
    crearArchivo,
    listarTabla
}
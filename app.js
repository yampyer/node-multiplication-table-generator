//const fs = require('fs'); // Propia de Node
// const express = require('express'); // Instalada externa
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // Archivos propios del proyecto
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log('El archivo', `${archivo}`.green, 'ha sido creado');
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv.limite);
//let param = argv[2];
//let base = param.split('=')[1];

//crearArchivo(base).then((archivo) => {
//    console.log(`El archivo ${archivo} ha sido creado`);
//}).catch((err) => {
//    console.log(err);
//});
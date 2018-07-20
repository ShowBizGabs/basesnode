/*
* @Author: Gabriel
* @Date:   2018-07-19 14:33:57
* @Last Modified by:   Gabriel
* @Last Modified time: 2018-07-20 11:08:05
*/

//Requireds

// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplica/multiplo');

let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTabla(argv.base, argv.limite);

	break;
	
	case 'crear':
		console.log('Crear');
		crearArchivo(argv.base, argv.limite)
			.then( archivo => console.log(`Archivo creado: `, colors.cyan(archivo)))
				.catch(e=>console.log(e));
	break;

	default:
		console.log('Comando no reconocido');
	

}




// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite: ', argv.limite);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];



// console.log(multiplicar);



// for ( i=1; i <= 10; i++) {
// 	// console.log(`${base} * ${i} = ${base*i}`);
// 	data += `${base} * ${i} = ${base*i}\n`;
// }


// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//   if (err) throw err;

//   console.log(`El archivo ${base} se creo exito!`);
// });


// crearArchivo(base)
// 	.then( archivo => console.log(`Archivo creado: ${archivo} `))
// 		.catch(e=>console.log(e));
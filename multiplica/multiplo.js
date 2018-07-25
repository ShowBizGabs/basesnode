/*
* @Author: Gabriel
* @Date:   2018-07-19 15:08:49
* @Last Modified by:   Gabriel Rosales
* @Last Modified time: 2018-07-25 13:09:43
*/
const fs = require('fs');
const colors = require('colors');

// Tarea

let listarTabla = (base, limite = 10)=>{

	console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*".green);
	console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*".green);
	console.log(`*-*-*-*-* Tabla de ${base} -*-*-*-*`.green);
	console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*".green);


	for ( let i=1; i <= limite; i++ ){
		console.log(` ${base} * ${i} = ${base * i} `); 
	}

	
}



let crearArchivo = (base, limite = 10)=>{
	return new Promise((resolve, reject)=>{

		if (!Number(base || limite)) {
			reject(`${base} / ${limite} no es un numero`);
			return;
		}

		let data = '';

		for ( let i=1; i <= limite; i++) {
			// console.log(`${base} * ${i} = ${base*i}`);
			data += `${base} * ${i} = ${base*i}\n`;
		}


		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

		  	if (err) 
		  		reject(err)
		  	else
		  		resolve(`El archivo ${base} con el limite ${limite} se creo exito!`);

		  // console.log(`El archivo ${base} se creo exito!`);
		});
	})
}


module.exports={
	crearArchivo,
	listarTabla
}
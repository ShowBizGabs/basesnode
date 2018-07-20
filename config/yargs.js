/*
* @Author: Gabriel
* @Date:   2018-07-20 10:51:46
* @Last Modified by:   Gabriel
* @Last Modified time: 2018-07-20 10:54:28
*/

const opts = {
	base: {
		demand: true,
		alias: 'b',
	},
	limite: {
		alias: 'l',
		default: 10,
	}
}

const argv = require('yargs')
	.command('listar', 'Imprime en consola la tabla', opts)
	.command('crear', 'Crea una tabla de multiplos', opts)
	.help()
	.argv;


module.exports = {
	argv
}
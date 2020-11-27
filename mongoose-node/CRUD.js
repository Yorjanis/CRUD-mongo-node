var User = require('./models.js')

module.exports.insertarRegistro = function (callback) {
	let Mateo = new User({nombre: "Mateo", edad: 28, peso: 90})

	Mateo.save((error) => {
		if (error)callback(error)
		callback(null, "registro guardado")
	})
}

module.exports.eliminarRegistro = function (callback) {
	User.remove({edad: 28}, (error) => {
		if (error) callback(error)
		callback(null,"elimino correctamente")
	})
}

module.exports.consultarYActualizar = function (callback) {
	User.find({}).exec((error, result) => {
		if(error)callback(error)
		console.log(result)
		User.update({nombre:"Naren"},{peso:40}, (error, result) => {
			if(error)callback(error)
			console.log(result)
		})
	})
}
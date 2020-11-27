module.exports.insertarRegistro = function (db, callback) {
	let coleccion = db.collection('users')

	coleccion.insertMany([
		{nombre: "Naren", edad: 20, peso: 65}
	], (error,result) => {
		console.log("Resultado de la insercion"+ result.toString())
	})
}

module.exports.eliminarRegistro = function (db,callback) {
	let coleccion = db.collection('users')

	try{
		coleccion.deleteMany({edad: 25})
		console.log("se elimino correctamente")
	}catch(e){
		console.log("Se genero un error: "+e)
	}
}

module.exports.consultarYActualizar = function (db, callback) {
	let coleccion = db.collection('users')

	coleccion.find().toArray((error, documents) => {
		if(error)console.log(error)
		console.log(documents)
		callback()
	})
	
	try{
		coleccion.updateOne({nombre:"Naren"}, {$set: {"peso": 100}})
		console.log("Se actualizo correctamente")
	}catch(e){
		console.log("Se genero un error: "+e)
	}

	coleccion.find().toArray((error, documents) => {
		if(error)console.log(error)
		console.log(documents)
		callback()
	})
}
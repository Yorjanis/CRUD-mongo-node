var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost/nodeDriver";

	var Operaciones = require('./CRUD.js')

	MongoClient.connect(url, function(error, db) {
	  
	  if (error) {
	  	console.log(error)
	  }else{
	  	console.log("Se establecio conexion con el servidor correctamente");
	  	/*Operaciones.insertarRegistro(db, (error, result) =>{
	  		if(error) console.log("Error insertando los registros: "+error)
	  	})*/
	  	Operaciones.consultarYActualizar(db, (error, result) =>{
	  		if(error){
	  			console.log("Error eliminando los registros: "+error)
	  		}
	  	})
	  }
	  db.close();
	})
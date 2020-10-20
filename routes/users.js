const express = require('express'),
router = express.Router();
var mysql = require('mysql');


// setear la base de datos
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'simpleapi'
})

connection.connect();

//obtiene los usuarios
router.get('/list', function(req,res){
	let sql = "SELECT * FROM users";
	connection.query(sql,function(err,data,fields){
		if (err) throw err;
		res.json({
			status: 200,
			data,
			message: "Se listo correctamente"
		})
	})
	
});

// crear un nuevo usuario
router.post('/new', function(req,res){
	let sql = "INSERT INTO users(name,gender) VALUES (?)";
	let values = [
		req.body.name,
		req.body.gender
	];
	connection.query(sql,[values],function(err,data,fields){
		if (err) throw err;
		res.json({
			status: 200,
			message: "Se añadio el usuario correctamente"
		})
	})
	
});

module.exports = router;
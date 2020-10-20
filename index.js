const express = require('express');
 path = require('path');
var app = express(),
cors = require("cors"),
bodyParser = require("body-parser");

// definicion del puerto del servidor
var server = {
	port: 4040
};

// routers
const usersRouter = require('./routes/users');

//usar los modulos
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//use router
app.use('/users',usersRouter);

// router user input
app.get('/', function(req, res) {
res.sendFile(path.resolve(__dirname,'views') + '/index.html');
});

//iniciando el servidor
app.listen( server.port, () => console.log(`Server started, listening port: ${server.port}`));

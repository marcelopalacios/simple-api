const express = require('express');
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

//use router
app.use('/users',usersRouter);

//iniciando el servidor
app.listen( server.port, () => console.log(`Server started, listening port: ${server.port}`));

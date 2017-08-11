var path = require("path");

module.exports = function(app){
	var burger_controller = require("./controllers/burgersController.js");
	

	app.use("/", burger_controller);
	

};
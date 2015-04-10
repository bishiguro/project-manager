var mongoose = require("mongoose");

var streamSchema = mongoose.Schema({
	users: String[],
	name: String,
	project: String,
	beginning: Date,
	//end: Date
});

module.exports = mongoose.model('Stream', streamSchema);




var mongoose = require("mongoose");

var streamSchema = mongoose.Schema({
	users: [{type: Schema.Types.ObjectId, ref: 'User'}],
	name: String,
	project: String,
	beginning: Date,
	//end: Date
});

module.exports = mongoose.model('Stream', streamSchema);




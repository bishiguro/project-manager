var mongoose = require("mongoose");

var projectSchema = mongoose.Schema({
	name: String,
	streams: [{type: Schema.Types.ObjectId, ref: 'Stream'}]
	//users: [{type: Schema.Types.ObjectId, ref: 'Project'}]
});

module.exports = mongoose.model('Project', projectSchema);




var mongoose = require("../mong/mongo.js"),
Schema = mongoose.Schema;
	var TokenSchema = new Schema({
		username : {type: String },
		token: {type: String},
		overtime: {type: Number}
	});
module.exports = mongoose.model("Token",TokenSchema)
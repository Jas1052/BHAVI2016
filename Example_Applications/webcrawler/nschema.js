
var mongoose = require("mongoose");
mongoose.set('debug', true);

//connect to database
var db = mongoose.connect('mongodb://localhost/npds');

//create schema for articles
var resourceSchema = new mongoose.Schema({
    tag: String,
    resource: Object
});
//   return db.model('pdsNResource', resourceSchema);

//compile schema to model
module.exports = db.model('pdsNResource', resourceSchema);

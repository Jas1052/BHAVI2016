var mongoose = require("mongoose");
mongoose.set('debug', true);

//connect to database
var db = mongoose.createConnection('mongodb://localhost/npds');

//create schema for articles
var resourceSchema = new mongoose.Schema({
    handle: String,
    resourceAuthor: String,
    representationMetadata: Object
    //entityMetadata: Object,
    //recordMetadata: Object,
    //infosetMetadata: Object
});
//   return db.model('pdsNResource', resourceSchema);

//compile schema to model
module.exports = db.model('doorsResources', resourceSchema);

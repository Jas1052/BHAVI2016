var mongoose = require("mongoose");
mongoose.set('debug', true);

//connect to database
var db = mongoose.connect('mongodb://localhost/test');

//create schema for articles
var articlesSchema = new mongoose.Schema({
    title:  String,
    author: String,
    journal: String,
    abstract: String,
    keyWords: String
});

//compile schema to model
module.exports = db.model('articles', articlesSchema);

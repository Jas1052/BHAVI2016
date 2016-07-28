var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var subSchema = mongoose.Schema({
    //your subschema content
},{ _id : false });

var Comment = new Schema({
    jsonObject : Object,
});

mongoose.model('comments', Comment);

mongoose.connect('mongodb://localhost/mongooseDatabase');
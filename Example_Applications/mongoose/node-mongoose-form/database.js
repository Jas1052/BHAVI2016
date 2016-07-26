var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Comment = new Schema({
    jsonObject : Object,
});

mongoose.model('comments', Comment);

mongoose.connect('mongodb://localhost/mongooseDatabase');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var schemaTypes = new Schema({
    jsonObject : Object,
});

mongoose.model('collectionName', schemaTypes);

mongoose.connect('mongodb://localhost/dbName');
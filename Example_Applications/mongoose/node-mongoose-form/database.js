var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var schemaTypes = new Schema({
    jsonObject : Object,
});

mongoose.model('schemaName', schemaTypes);

mongoose.connect('mongodb://localhost/dbName');
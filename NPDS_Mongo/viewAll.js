//prints all all records in NPDS
(function viewAll() {
    var jsonxml = require('jsontoxml');
    console.log("Looking for all records");
    var Articles = require("./schemas/nschema.js"); //grabs schema and model
    Articles.find({}, function (err, docs) { //checks DOORS
        //var xml = jsonxml(JSON.stringify(docs));
        console.log(docs);
    });
})();
//var mongoose = require("mongoose");
(function retrieveResources() {
    var jsonxml = require('jsontoxml');
    console.log("Search.js Started");
    var handleName = "FSaNCoBVFD"; // specify handle to look for
    lookFor(handleName);

    function lookFor(tag) {
        console.log("Looking");
        var Articles = require("./schemas/dschema.js"); //grabs schema and model
        console.log("Checking DOORS");
        Articles.find({handle: tag}, "-_id representationMetadata", function (err, docs) { //checks DOORS
            var xml = jsonxml(JSON.stringify(docs));
            console.log(xml);
        });
    }
})();
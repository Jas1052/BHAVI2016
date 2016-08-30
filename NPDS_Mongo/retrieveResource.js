//var mongoose = require("mongoose");
(function retrieveResources() {
    var jsonxml = require('jsontoxml');
    console.log("Search.js Started");
    var handleName = "FSaNCoBVFD"; // specify handle
    lookFor(handleName);

    function lookFor(tag) {
        console.log("Looking");
        var Articles = require("./dschema.js"); //grabs schema and model
        console.log("Checking DOORS");
        Articles.find({handle: tag}, "-_id resource", function (err, docs) { //checks DOORS
            var xml = jsonxml(JSON.stringify(docs));
            console.log(xml);
        });
    }
})();
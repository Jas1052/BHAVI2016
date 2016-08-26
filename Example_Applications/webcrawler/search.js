//var mongoose = require("mongoose");
(function search() {
    console.log("Search.js Started");
    var title = "MicroRNA-613 regulates the expression of brain-derived neurotrophic factor in Alzheimer's disease.";
    lookFor(title);

    function lookFor(tag) {
        var Articles = require("./nschema.js"); //grabs schema and model
        Articles.find({title: tag}, "-_id resource", function (err, docs) {
            console.log("Looking");
            console.log(docs);
        });
    }
})();
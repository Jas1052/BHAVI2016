//var mongoose = require("mongoose");
(function search() {
    console.log("Search.js Started");
    var author = "Jason";
    lookFor(author);

    function lookFor(tag) {
        var Articles = require("./nschema.js"); //grabs schema and model
        Articles.find({author: tag}, "-_id handle", function (err, docs) {
            console.log("Looking");
            var result = docs.split(", ");
            console.log(result);
        });
    }
})();
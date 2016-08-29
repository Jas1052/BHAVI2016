//var mongoose = require("mongoose");
(function search() {
    console.log("Search.js Started");
    var author = "Jason";
    lookFor(author);

    function lookFor(tag) {
        console.log("Looking");
        var Articles = require("./nschema.js"); //grabs schema and model
        Articles.find({author: tag}, "-_id handle", function (err, docs) {
            //console.log(docs);
            var result = docs.toString();
            var count = (result.match(/handle:/g) || []).length; //finding # of occurrences
            var temp = result;
            result = "";
            console.log("Checking DOORS");
            for(i = 0; i < count; i++){ //rotates to find occurrences
                //console.log(temp);
                //console.log(temp.indexOf("handle:"));
                var tagValue = temp.match(/'([^']+)'/)[1];

                var Articles = require("./dschema.js"); //grabs schema and model
                Articles.find({handle: tagValue}, "-_id handle", function (err, docs) { //checks DOORS
                    //console.log(docs);
                    console.log(docs);
                });

                result = result + "\n" + temp.substring(temp.indexOf(tagValue), temp.indexOf(tagValue) + tagValue.length);
                //console.log("result: " + result);
                temp = temp.substring(temp.indexOf(tagValue) + tagValue.length + 4);
            }
            //console.log(result);
        });
    }
})();
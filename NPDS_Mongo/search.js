var mongoose = require("mongoose");

console.log("Search.js Started")
lookFor("Populations and Interventions for Palliative and End-of-Life Care: A Systematic Review.");
console.log("Search.js Ended");
process.exit(-1);

function lookFor(searchPhrase){
    console.log("Looking");
    var Articles = require("./database.js");
    Articles.find({title: searchPhrase}, function(err, docs){
        console.log(docs);
    });
}

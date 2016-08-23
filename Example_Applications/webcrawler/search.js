//var mongoose = require("mongoose");

console.log("Search.js Started");
var title = "MicroRNA-613 regulates the expression of brain-derived neurotrophic factor in Alzheimer's disease.";
lookFor(title);

function lookFor(searchPhrase){
    var Articles = require("./database.js"); //grabs schema and model
    Articles.find({title: searchPhrase}, "author", function(err, docs){
        console.log("Looking");
        console.log(docs);
    });
}

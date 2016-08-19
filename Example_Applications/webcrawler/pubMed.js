var request = require('request')
var cheerio = require('cheerio')
var request = require('request')
var cheerio = require('cheerio')
var URL = require('url-parse')

var articles = require("database.js");
//create new model
var post = new BlogPost({title: "My first post", author: "Yash Kumar",
    body: "We want to make documentation obsolete"});
//save model to MongoDB
post.save(function (err) {
    if (err) {
        return err;
    }
    else {
        console.log("Post saved");
    }
});

var searchKey = process.argv[2]
//var depth = parseInt(process.argv[3])
//depth = 10*depth
var webpage = "http://www.ncbi.nlm.nih.gov/pubmed/?term="+searchKey
var relatedArticles = []
//console.log("Search: " + searchKey)

request(webpage, function(error, response, body) {
    if(error === true) {
        console.log("Error Error Error")
    }
    console.log("Status code: " + response.statusCode);
    if(response.statusCode === 200) {
        // Parse the document body
        var $ = cheerio.load(body);
        var linksList = [];
        var links = $("a[href^='/']");
        links.each(function(){
            relLink = $(this).attr('href');
            //console.log(relLink);
            if(relLink.includes('/pubmed/') && "0123456789".includes(relLink.substring(8, 9))){
                linksList.push($(this).attr('href'));
            };
        });
        console.log(linksList);

        for(i = 0; i < linksList.length; i++){
            webpageNew = "http://www.ncbi.nlm.nih.gov"+linksList[i];

            request(webpageNew, function(error, response, body) {
                if(error === true) {
                    console.log("Error Error Error")
                }
                console.log("Status code: " + response.statusCode);
                if(response.statusCode === 200) {
                    // Parse the document body
                    var $ = cheerio.load(body);
                    //authorsList = []
                    var titles = $("h1");
                    var authors = $("div[class='auths']");
                    var abstracts = $("abstracttext");
                    var conclu = $("abstracttext[label='CONCLUSION']");
                    var string = titles.text();
                    var relArt = $("a[class='href']");
                    string = string.replace('PubMed', "");
                    console.log("TITLE: " + string);
                    new Article({title : string}) //saves data in database
                        .save(function(err, comment) {
                            //console.log(comment)
                        });
                    console.log();
                    console.log("AUTHORS: " + authors.text());
                    console.log();
                    console.log("ABSTRACT: " + abstracts.text());
                    console.log();
                    console.log("RESULTS: " + conclu.text());
                    console.log();
                    console.log("RDF: '" + string + "' was written by " + authors.text());
                    console.log();
                    console.log("related articles: ", relArt);
                    if(conclu.text() !== ""){
                        console.log("RDF: " + string + " yielded these results: " + conclu.text());

                    }
                    console.log()
                    console.log()

                };

            });

        }

    }
});

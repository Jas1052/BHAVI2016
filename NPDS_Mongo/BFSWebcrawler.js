//BHAVI 2016 WEBCRAWLER

//modules needed for webcrawler outlined in package.json
/*These modules are downloaded by running "npm install" within the root of the application folder.
In this case, the folder would be webcrawler. A new folder called node_modules is created that holds all
the modules needed for the program. */
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

//statistical global variables for webcrawl statistics gathered from the sum of all article data.
var gdementia = 0;
var galzheimers = 0;
var gtau = 0;
var gamyloid = 0;
var gsensoryONSET = 0;
var gmotorONSET = 0;
var glanguageONSET = 0;
var gnumarticles = 0;

//global array for holding all articles in JSON format.
var jsonArray = [];

//MAIN: Where are all the functions are called, and where the webcrawling and data processing starts
console.log("STARTED");

//searchkey input from command line
var searchKey = process.argv[2];
console.log("SEARCHKEY: ", searchKey);

//inserts searchkey into the url to initiate webcrawl, and gather the resource/article data
var webpage = "http://www.ncbi.nlm.nih.gov/pubmed/?term="+searchKey;

var searchPhrase = "Late-onset depression : Pathophysiology, diagnostics and treatment";

webcrawl(webpage, BFS);

/*Functions within Webcrawler Program used in MAIN. Formatted so that functions used first in MAIN appear
first in the function list. Each function utilizes callbacks in order to make the process of the program
synchronous rather than asynchronous, since each function needs to be called in a particular order*/

//webcrawling function, initiates webcrawl by gathering all articles to be processed later
function webcrawl(webpage, callback){
    //gathers list of all initial links
    var listolinks = [];

    request(webpage, function(error, response, body) {
        if (error === true) {
            console.log("Error Error Error")
        }
        console.log("SUCCESSFUL REQUEST");
        if (response.statusCode === 200) {
            // Gathers data from the webpage
            var $ = cheerio.load(body);

            //manipulates HTML attirbutes to gather all relative links
            var links = $("a[href^='/pubmed/']");
            links.each(function () {
                var link = $(this).attr('href');
                if ("0123456789".includes(link.substring(8, 9)) && link !== '/pubmed/') {
                    listolinks.push($(this).attr('href'));
                }
            });
        }
        console.log(listolinks);
        //runs BFS function
        callback(listolinks, keywordSTATS);
    });

}

/*Breadth First Search function. Processes articles and outputs the important data, such as article title,
authors, abstracts, etc.*/
function BFS(listolinks, callback){
    //console.log("STARTED BFS")
    var empty = false;
    //BFS runs until the list is empty
    while(listolinks.length > 0){
        var resource = listolinks.shift();
        //creates list of visited links
        var visited = [];

        //if link was not visited before, push into the BFS list of "TO BE processed links". Else, skip over it
        if(visited.indexOf(resource) === -1){
            visited.push(resource);
            var resourcepage = "http://www.ncbi.nlm.nih.gov"+resource;

            request(resourcepage, function(error, response, body) {
                if(error === true) {
                    console.log("Error Error Error")
                }
                if(response.statusCode === 200) {
                    gnumarticles += 1;
                    if(listolinks.length === 0){
                      empty = true;
                    }
                    //console.log(empty)

                    // gathers data from webpage
                    var $ = cheerio.load(body);

                    var links = $("a[href^='/pubmed/']");
                    links.each(function(){
                        var link = $(this).attr('href');
                        if("0123456789".includes(link.substring(8, 9)) && link !== '/pubmed/'){
                            listolinks.push($(this).attr('href'));
                        }
                    });

                    //prints out all the information gathered from each article in the search
                    var titles = $("h1").text().replace("PubMed", "");
                    console.log("TITLE:", titles);
                    var authors = $("div[class='auths']").text();
                    console.log("AUTHORS:", authors);
                    var journal = $("a[title^='']");
                    console.log("JOURNAL:", journal.text());
                    var abstracts = $("abstracttext").text();
                    console.log("ABSTRACT:", abstracts);
                    var keys = $("div[class='keywords']");
                    var keysString = keys.text().replace("KEYWORDS: ", "");
                    var keysArray = keysString.split("; ");
                    console.log();
                    console.log("KEYWORDS:", keysArray);

                    saveInfo(titles, authors, journal, abstracts, keysArray);

                    var articleJSON = {
                      'name': titles,
                      'authors': authors,
                      'journal': journal.text(),
                      'description': abstracts,
                      'date': "",
                      'volume': ""
                    };

                    //converts JSON ARTICLE to Bibtex format
                    jsonTObib(articleJSON);

                    /*pushes JSON ARTICLE into global JSON array that can be converted later into PDS format or
                    Bibtech format*/
                    jsonArray.push(articleJSON);

                    //runs statistics function on number of keywords
                    /*if(abstracts !== undefined){
                      callback(abstracts);
                    }*/

                    console.log();
                }
            });
        }
    }
    //console.log("Aync Test");
    //lookFor("Late-onset depression : Pathophysiology, diagnostics and treatment");
}

/*Converts JSON ARTICLES into bibtex format*/
function jsonTObib(jsonObj){
  //all keys found in an ARTICLE JSON OBJECT
  //keys = ['name', 'authors', 'journal', 'description', 'date', 'volume'];

  //gathers list of all author names within the article
  var citationAuthorArray = jsonObj.authors.split(" ");
  var citationName = ""+citationAuthorArray[0];
  for(var i = 2; i < citationAuthorArray.length; i+=2){
    citationName += ("+" + citationAuthorArray[i]);
  }

  //process data from jsonObjj into Bibtech format.
  var bibtexFORM = "";
  bibtexFORM = "@article{"+citationName+", author: "+jsonObj.authors+", title: "+jsonObj.name+", journal: "+jsonObj.journal+", year: "+jsonObj.date+", volume: "+jsonObj.volume+"}"
  console.log();
  console.log("BIBTEX FORMAT: ", bibtexFORM);
  console.log();

  }

/*statistical function. Shows individual article stats, and how many times each keyword appears in
the article data*/
function keywordSTATS(text){
    var dementia = 0;
    var alzheimers = 0;
    var tau = 0;
    var amyloid = 0;
    var sensoryONSET = 0;
    var motorONSET = 0;
    var languageONSET = 0;

    //console.log("TEXT: ", text)
    var processedtext = text.toLowerCase();
    var statisticalArray = processedtext.split(" ");
    for(var i = 0; i < statisticalArray.length; i++){
        if(statisticalArray[i] === "dementia"){
            dementia += 1;
            gdementia += 1;
        }
        else if(statisticalArray[i] === "alzheimer's"){
            alzheimers += 1;
            galzheimers += 1;

        }
        else if(statisticalArray[i] === "tau"){
            tau += 1;
            gtau += 1;
        }
        else if(statisticalArray[i] === "amyloid" || statisticalArray[i] === "Aβ"){
            amyloid += 1;
            gamyloid += 1;
        }
        else if(statisticalArray[i] === "sensory" || statisticalArray[i] === "senses"){
            sensoryONSET += 1;
            gsensoryONSET += 1;
        }
        else if(statisticalArray[i] === "motor"){
            motorONSET += 1;
            gmotorONSET += 1;
        }
        else if(statisticalArray[i] === "language"){
            languageONSET += 1;
            glanguageONSET += 1;
        }

    }

    console.log();
    console.log("STATS FROM INDIVIDUAL ARTICLE: ");
    console.log("# of Dementia: ", dementia);
    console.log("# of Alzheimers: ", alzheimers);
    console.log("# of Tau: ", tau);
    console.log("# of Amyloid: ", amyloid);
    console.log("# of Sensory Onset: ", sensoryONSET);
    console.log("# of Motor Onset: ", motorONSET);
    console.log("# of Focal Onset: ", languageONSET);
}

//statistical function, shows stats from all articles found from search
function globalSTATS(){
  console.log();
  console.log("STATS FROM ALL ARTICLES: ");
  console.log("# of articles processed: ", gnumarticles);
  console.log("# of Dementia: ", gdementia);
  console.log("# of Alzheimers: ", galzheimers);
  console.log("# of Tau: ", gtau);
  console.log("# of Amyloid: ", gamyloid);
  console.log("# of Sensory Onset: ", gsensoryONSET);
  console.log("# of Motor Onset: ", gmotorONSET);
  console.log("# of Focal Onset: ", glanguageONSET);
}

//saves info on primary articles
function saveInfo(title, authors, journal, abstract, keysArray){
    //console.log("I'm here");
    var Article = require("./database.js");
    //connects to model
    var info = new Article(
        {
            title: title,
            author: authors,
            journal: journal,
            abstract: abstract,
            keyWords: keysArray
        }
    );
    //save model to MongoDB
    info.save(function (err) {
        if (err) {
            return err;
        }
        else {
            console.log("Article stored");
        }
    });
}

/* Done in search.js now
function lookFor(searchPhrase){
    console.log("Running lookFor");
    var Articles = require("./database.js");
    Articles.findOne({'title': searchPhrase}, function(err, docs){
        console.log(docs);
    });
    console.log("Ending lookFor");
}*/
//Article 1
var name = "First Symptoms and Neurocognitive Correlates of Behavioral Variant Frontotemporal Dementia";
var nature = "Dementia";
var type = "Article";
var author = "Santamaría-García H1,2,3,4, Reyes P1,4, García A2,3,5, Baéz S2,3, Martinez A1,6, Santacruz JM1,4, Slachevsky A7,8,9, Sigman M10, Matallana D1,4, Ibañez A2,3,11,12,13";
//Article 2
// var name = "Complement Biomarkers as Predictors of Disease Progression in Alzheimer's Disease";
// var nature = "Alzheimer";
// var type = "Article";
// var author = "Hakobyan S1, Harding K2, Aiyaz M3, Hye A3, Dobson R3, Baird A4, Liu B4, Harris CL1, Lovestone S4, Morgan BP1";

var resourceAuthor = "jliu";

saveInfo(name, nature, author, type, resourceAuthor);
console.log('test');

function saveInfo(name, nature, author, type, resourceAuthor){
    //console.log("I'm here");
    //prepping variables for xmlResource
    var matches = name.match(/\b(\w)/g);
    var principalTag = matches.join('');
    var isDuplicate;
    var Auth = require("./nschema.js"); //connects to model
    Auth.findOne({handle: 'principalTag'}, function(err,obj){
        if(!(obj == null)){
            principalTag = principalTag + 1;
        }
    });
    console.log(principalTag);

    var d = new Date();
    var creationDate = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "Z";

    var xmlResource =

        '<ServerResponse>' +
        '<Status>' + 'FillerStatus' + '</Status>' +
        '<Answer>' +
        '<NEXUS>' +
        '<ResourceRepresentation>' +
        '<EntityMetadata>'+
        '<Name>' +
        name +
        '</Name>' +
        '<Nature>' +
        nature +
        '</Nature>' +
        '<CanonicalLabel>' + 'http://pds.brainwatch.net/solomon/' + principalTag + '</CanonicalLabel>' +
        '<AliasLabels>' +
        '<AliasLabel>' + 'http://pds.brainwatch.net/solomon/i515cf983ed' + '</AliasLabel>' +
        '</AliasLabels>' +
        '<PrincipalTag>' + principalTag + '</PrincipalTag>' +
        '</EntityMetadata>' +
        '<RecordMetadata>' +
        '<CreatedOn>' + creationDate + '</CreatedOn>' +
        '<UpdatedOn>' + creationDate + '</UpdatedOn>' +
        '<Registrar>' + 'http://pds.brainhealthalliance.net/bha-nexus' + '</Registrar>' +
        '<Registry>' + 'http://pds.brainwatch.net/solomon' + '</Registry>' +
        '<Directory>' + 'http://pds.brainhealthalliance.net/bha-doors' + '</Directory>'+
        '</RecordMetadata>' +
        '<InfosetMetadata>' +
        '<PortalValidation>' +
        '<Status>' + 'Pending' + '</Status>' +
        '</PortalValidation>' +
        '<DoorsValidation>' +
        '<Status>' + 'Pending' + '</Status>' +
        '</DoorsValidation>' +
        '</InfosetMetadata>' +
        '</ResourceRepresentation>' +
        '</NEXUS>' +
        '</Answer>' +
        '</ServerResponse>' +
        '</PDS>';

    console.log(xmlResource);
    var parseString = require('xml2js').parseString;
    var xml = "<root>Hello xml2js!</root>"
    parseString(xmlResource, function (err, jsonResource) {
        //console.log(result);
        var nresource = require("./nschema.js"); //connects to model
        nresource.create(
            {
                handle: principalTag, //identifier
                resourceAuthor: resourceAuthor,
                resource: jsonResource //xml
            },
            function(err, value, path) {
                console.log(err);
            }
        );
        var presource = require("./pschema.js"); //connects to model
        presource.create(
            {
                handle: principalTag, //identifier
                resourceAuthor: resourceAuthor,
                resource: jsonResource //xml
            },
            function(err, value, path) {
                console.log(err);
            }
        );
        var dresource = require("./dschema.js"); //connects to model
        dresource.create(
            {
                handle: principalTag, //identifier
                resourceAuthor: resourceAuthor,
                resource: jsonResource //xml
            },
            function(err, value, path) {
                console.log(err);
            }
        )
    });
}
function xml2json(xml) {
    var parseString = require('xml2js').parseString;
    parseString(xml, function (err, result) {
        console.dir(result);
    });
}
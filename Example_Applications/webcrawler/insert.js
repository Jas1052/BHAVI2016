var name = "test name";
var nature = "testNature";
var type = "testType";

saveInfo(name, nature, type);
console.log('test');

function saveInfo(name, nature, type){
    //console.log("I'm here");
    //prepping variables for xmlResource
    var matches = name.match(/\b(\w)/g);
    var principalTag = matches.join('');
    console.log(principalTag);
    var d = new Date();
    var creationDate = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "Z";

    var xmlResource =
        '<PDS xmlns="http://pds.portaldoors.org/xmlns/2016/npdsystem#" Version="0.9">' +
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
    var resource = require("./nschema.js");
    //connects to model
    var parseString = require('xml2js').parseString;
    var info = new resource(
        {
            tag: principalTag, //identifier
            resource: xmlResource
        }
    );
    //save model to MongoDB
    info.save(function (err) {
        if (err) {
            return err;
        }
        else {
            console.log("Resource stored");
        }
    });
}
function xml2json(xml) {
    var parseString = require('xml2js').parseString;
    parseString(xml, function (err, result) {
        console.dir(result);
    });
}
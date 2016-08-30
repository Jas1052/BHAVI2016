//Article 1
// var name = "First Symptoms and Neurocognitive Correlates of Behavioral Variant Frontotemporal Dementia";
// var nature = "Dementia";
// var type = "Article";
// var author = "Santamaría-García H1,2,3,4, Reyes P1,4, García A2,3,5, Baéz S2,3, Martinez A1,6, Santacruz JM1,4, Slachevsky A7,8,9, Sigman M10, Matallana D1,4, Ibañez A2,3,11,12,13";
//Article 2
var name = "Complement Biomarkers as Predictors of Disease Progression in Alzheimer's Disease";
var nature = "Alzheimer";
var type = "Article";
var author = "Hakobyan S1, Harding K2, Aiyaz M3, Hye A3, Dobson R3, Baird A4, Liu B4, Harris CL1, Lovestone S4, Morgan BP1";

//Sets author of the resource (for future editing/access)
var resourceAuthor = "jliu";

saveInfo(name, nature, author, type, resourceAuthor);

function saveInfo(name, nature, author, type, resourceAuthor) {
    //prepping variables for xmlResource
    var matches = name.match(/\b(\w)/g);
    var principalTag = matches.join('');
    var isDuplicate;
    var Auth = require("./nschema.js"); //connects to model
    //checks if tag exists
    Auth.findOne({handle: 'principalTag'}, function (err, obj) {
        if (!(obj == null)) {
            principalTag = principalTag + 1;
        }
    });
    console.log(principalTag);
    //creates dates
    var d = new Date();
    var creationDate = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "Z";

    //*********Full***********//
    //var xmlResource = createResource(name, nature, author, type, resourceAuthor);

    //*********Partial*******//
    var xmlResource =
        '<PDS>' +
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
    parseString(xmlResource, function (err, jsonResource) {
        //console.log(result);
        var nresource = require("./nschema.js"); //connects to model
        nresource.create(
            {
                handle: principalTag, //identifier
                resourceAuthor: resourceAuthor,
                resource: jsonResource //xml
            },
            function (err, value, path) {
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
            function (err, value, path) {
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
            function (err, value, path) {
                console.log(err);
            }
        )
    });
}
function createResource(name, nature, author, type, resourceAuthor) {
    var resource =
    '<pds:ClientRequest>' +
        '<pds:URL>aaaaaaaa</pds:URL>' +
        '<pds:Note/>' +
        '<pds:Question/>' +
        '</pds:ClientRequest>' +
    '<pds:ServerResponse>' +
        '<pds:Status/>' +
        '<pds:Note/>' +
        '<pds:Answer>' +
            '<pds:NEXUS pds:Count="0">' +
                '<pds:ResourceRepresentation ResourceIid="0">' +
                    '<pds:EntityMetadata EntityHid="">' +
                        '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                        '<pds:AliasLabels pds:Count="0">' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                        '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                        '<pds:SupportingTags pds:Count="0">' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                        '<pds:CrossReferences pds:Count="0">' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                        '<pds:OtherMetadata/>' +
                        '<pds:Locations pds:Count="0">' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                        '<pds:Description pds:Count="0"/>' +
                        '<pds:Name/>' +
                        '<pds:Nature/>' +
                        '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                        '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                        '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                    '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                        '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                        '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                        '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                        '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                        '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                        '<pds:Signature/>' +
                        '<pds:Distribution/>' +
                        '<pds:Provenance/>' +
                        '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                        '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                        '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                        '<pds:SecondaryRegistries pds:Count="0">' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                        '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:Directory>' +
                        '<pds:SecondaryDirectories pds:Count="0">' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsRoot" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                    '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                        '<pds:PortalValidation>' +
                            '<pds:Status>Pending</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                        '<pds:DoorsValidation>' +
                            '<pds:Status>Invalid</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                        '<pds:Entailment pds:Count="0">' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '<pds:ResourceRepresentation ResourceIid="0">' +
                    '<pds:EntityMetadata EntityHid="">' +
                        '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                        '<pds:AliasLabels pds:Count="0">' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                        '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                        '<pds:SupportingTags pds:Count="0">' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                        '<pds:CrossReferences pds:Count="0">' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                        '<pds:OtherMetadata/>' +
                        '<pds:Locations pds:Count="0">' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                        '<pds:Description pds:Count="0"/>' +
                        '<pds:Name/>' +
                        '<pds:Nature/>' +
                        '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                        '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                        '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                    '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                        '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                        '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                        '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                        '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                        '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                        '<pds:Signature/>' +
                        '<pds:Distribution/>' +
                        '<pds:Provenance/>' +
                        '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:Registrant>' +
                        '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                        '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                        '<pds:SecondaryRegistries pds:Count="0">' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                        '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:Directory>' +
                        '<pds:SecondaryDirectories pds:Count="0">' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                    '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                        '<pds:PortalValidation>' +
                            '<pds:Status>Pending</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                        '<pds:DoorsValidation>' +
                            '<pds:Status>Invalid</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                        '<pds:Entailment pds:Count="0">' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '</pds:NEXUS>' +
            '</pds:Answer>' +
        '<pds:Related>' +
            '<pds:NEXUS pds:Count="0">' +
                '<pds:ResourceRepresentation ResourceIid="0">' +
                    '<pds:EntityMetadata EntityHid="">' +
                        '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                        '<pds:AliasLabels pds:Count="0">' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                        '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                        '<pds:SupportingTags pds:Count="0">' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                        '<pds:CrossReferences pds:Count="0">' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                        '<pds:OtherMetadata/>' +
                        '<pds:Locations pds:Count="0">' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                        '<pds:Description pds:Count="0"/>' +
                        '<pds:Name/>' +
                        '<pds:Nature/>' +
                        '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                        '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                        '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                    '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                        '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                        '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                        '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                        '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                        '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                        '<pds:Signature/>' +
                        '<pds:Distribution/>' +
                        '<pds:Provenance/>' +
                        '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:Registrant>' +
                        '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                        '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                        '<pds:SecondaryRegistries pds:Count="0">' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                        '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:Directory>' +
                        '<pds:SecondaryDirectories pds:Count="0">' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                    '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                        '<pds:PortalValidation>' +
                            '<pds:Status>Pending</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                        '<pds:DoorsValidation>' +
                            '<pds:Status>Invalid</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                        '<pds:Entailment pds:Count="0">' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '<pds:ResourceRepresentation ResourceIid="0">' +
                    '<pds:EntityMetadata EntityHid="">' +
                        '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                        '<pds:AliasLabels pds:Count="0">' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                        '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                        '<pds:SupportingTags pds:Count="0">' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                        '<pds:CrossReferences pds:Count="0">' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                        '<pds:OtherMetadata/>' +
                        '<pds:Locations pds:Count="0">' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                        '<pds:Description pds:Count="0"/>' +
                        '<pds:Name/>' +
                        '<pds:Nature/>' +
                        '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                        '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                        '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusSecondary" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                    '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                        '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                        '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                        '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                        '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                        '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                        '<pds:Signature/>' +
                        '<pds:Distribution/>' +
                        '<pds:Provenance/>' +
                        '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                        '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusPrimary" Priority="0">aaaaaaaa</pds:Registrar>' +
                        '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:Registry>' +
                        '<pds:SecondaryRegistries pds:Count="0">' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                        '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Directory>' +
                        '<pds:SecondaryDirectories pds:Count="0">' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsRoot" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                    '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                        '<pds:PortalValidation>' +
                            '<pds:Status>Valid</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                        '<pds:DoorsValidation>' +
                            '<pds:Status>Valid</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                        '<pds:Entailment pds:Count="0">' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '</pds:NEXUS>' +
            '</pds:Related>' +
        '<pds:Referred>' +
            '<pds:NEXUS pds:Count="0">' +
                '<pds:ResourceRepresentation ResourceIid="0">' +
                    '<pds:EntityMetadata EntityHid="">' +
                        '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                        '<pds:AliasLabels pds:Count="0">' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                        '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                        '<pds:SupportingTags pds:Count="0">' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                        '<pds:CrossReferences pds:Count="0">' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                        '<pds:OtherMetadata/>' +
                        '<pds:Locations pds:Count="0">' + ' +' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                        '<pds:Description pds:Count="0"/>' +
                        '<pds:Name/>' +
                        '<pds:Nature/>' +
                        '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                        '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                        '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                    '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                        '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                        '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                        '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                        '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                        '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                        '<pds:Signature/>' +
                        '<pds:Distribution/>' +
                        '<pds:Provenance/>' +
                        '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                        '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                        '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:Registry>' +
                        '<pds:SecondaryRegistries pds:Count="0">' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalSecondary" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                        '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:Directory>' +
                        '<pds:SecondaryDirectories pds:Count="0">' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                    '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                        '<pds:PortalValidation>' +
                            '<pds:Status>Pending</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                        '<pds:DoorsValidation>' +
                            '<pds:Status>Valid</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                        '<pds:Entailment pds:Count="0">' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '<pds:ResourceRepresentation ResourceIid="0">' +
                    '<pds:EntityMetadata EntityHid="">' +
                        '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                        '<pds:AliasLabels pds:Count="0">' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                        '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                        '<pds:SupportingTags pds:Count="0">' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                        '<pds:CrossReferences pds:Count="0">' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                        '<pds:OtherMetadata/>' +
                        '<pds:Locations pds:Count="0">' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '<pds:Location>' +
                                '<pds:Url>http://www.altova.com</pds:Url>' +
                                '<pds:Xml>text</pds:Xml>' +
                                '<pds:DisplayText/>' +
                                '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                        '<pds:Description pds:Count="0"/>' +
                        '<pds:Name/>' +
                        '<pds:Nature/>' +
                        '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                        '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                        '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                    '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                        '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                        '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                        '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                        '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                        '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                        '<pds:Signature/>' +
                        '<pds:Distribution/>' +
                        '<pds:Provenance/>' +
                        '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                        '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusPrimary" Priority="0">aaaaaaaa</pds:Registrar>' +
                        '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                        '<pds:SecondaryRegistries pds:Count="0">' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                        '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsRoot" Priority="0">aaaaaaaa</pds:Directory>' +
                        '<pds:SecondaryDirectories pds:Count="0">' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                    '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                        '<pds:PortalValidation>' +
                            '<pds:Status>Pending</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                        '<pds:DoorsValidation>' +
                            '<pds:Status>Pending</pds:Status>' +
                            '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                        '<pds:Entailment pds:Count="0">' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '</pds:NEXUS>' +
            '</pds:Referred>' +
        '</pds:ServerResponse>' +
    '</pds:PDS>';

    return resource;
}
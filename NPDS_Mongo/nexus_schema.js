var mongoose = require("mongoose");
mongoose.set('debug', true);

//connect to database
var db = mongoose.connect('mongodb://localhost/npds');

//create schema for articles
var schemaNexus = new mongoose.Schema({
    EntityHidKey: {type: String, required: true},
    EntityTypeCode: String,
    EntityName: String,
    EntityNature: String,
    EntityOwnerInfosetGuideRef: String,
    EntityContactInfosetGuideRef: String,
    EntityOtherInfosetGuidRef: String,
    EntityDescription: String,
    EntityOtherMetaData: String,
    //ResourceIdKey:
    pds_NTagAndLabel: {
        InternalKey: Number,
        //ResourceIdRef
        Priority: String,
        LabelIsCanonical: Boolean,
        LabelIsPrivate: Boolean,
        LabelIsResolvable: Boolean,
        LabelIsTagIndependent: Boolean,
        TagToken: String,
        LabelUri: String,
        EntityLabel: String,
        Version: String
    },
    pds_NLocation: {
        InternalKey: Number,
        //ResourceIdRef
        Priority: String,
        LocationUrl: String,
        LocationXml: String,
        LocationDisplayText: String,
        LocationDisplayImageUrl: String,
        Version: String
    },
    pds_NCrossReference: {
        InternalKey: Number,
        //ResourceIdRef
        Priority: String,
        CrossReferenceUrl: String,
        CrossReferenceXml: String,
        Version: String
    },
    pds_NSupportingTag: {
        InternalKey: Number,
        //ResourceIdRef
        Priority: String,
        SupportTag: String,
        TagisRestricted: String,
        Version: String
    },
    pds_NSupportingLabel: {
        InternalKey: Number,
        //ResourceIdRef
        Priority: String,
        SupportingLabel: String,
        LabelIsRestricted: String,
        Version: String
    },
    pds_NSecondaryRegistry: {
        InternalKey: Number,
        //ResourceIdRef
        Priority: String,
        RegistryInfosetGuidRef: String,
        Version: String
    },

    pds_NSecondaryDirectory: {
        InternalKey: Number,
        //ResourceIdRef
        Priority: String,
        DirectoryInfoSetGuidRef: String,
        Version: String
    },
    RecordHandle: String,
    RecordIsCachedCopy: String,
    RecordRegistrantInfosetGuidRef: String,
    RecordRegistrarInfosetGuidRef: String,
    RecordRegistryInfosetGuidRef: String,
    RecordDirectoryInfosetGuidRef: String,
    RecordCreatedByAgentIdRef: String,
    RecordCreatedOn: Date,
    RecordUpdatedByAgentIdRef: String,
    RecordUpdatedOn: Date,
    RecordManagedByAgentIdRef: String,
    RecordVersion: String,
    RecordSignature: String,
    RecordProvenance: String,
    RecordDistribution: String,
    InfosetGuidKey: String,
    InfosetIsPrivate: Boolean,
    InfosetIsVerbose: Boolean,
    InfosetEntailment: String,
    InfosetPortalStatusCode: String,
    InfosetPortalStatusTestedOn: String,
    InfosetDoorsStatusCode: String,
    InfosetDoorsStatusTestedOn: String
});

//compile schema to model
module.exports = db.model('pds_NResource', schemaNexus);
